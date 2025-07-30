import clientModel from "../model/clientSchema.js";
import clientAddressModel from "../model/clientAddressSchema.js";

export async function getAllClients(req, res) {
    const clients = await clientModel.find();
    try {
        return res.status(200).json({
            request: "OK",
            route: "get all clients",
            data: clients
        });
    } catch (error) {
        return res.status(400).json({
            request: "Fail",
            route: "there are no clients ",
        });
    }
}
export async function getClientById(req, res) {
    try {
        const id = req.params.id;
        const foundedClient = await clientModel.findOne({_id: id});
        const foundedClientAddress=  await clientAddressModel.findOne({_id: id});
        return res.status(200).json({
            request: "OK",
            route: `get client by id, client selected ${id}`,
            data: {
                foundedClient,
                foundedClientAddress
            },
            
        });
    } catch (error) {
        return res.status(400).json({
        request: "Fail",
        route: `client of id: ${id} not found`,
    });
    }
}
export async function createClient(req, res) {
    const {
        nome, 
        email, 
        senha, 
        cep, 
        logradouro, 
        numero, 
        bairro, 
        complemento
    } = req.body;
    const emailExist = await clientModel.findOne({cl_email:email})
    try { 
        if(emailExist){
            return res.status(400).json({
            request: "alert",
            route: "create a client",
            data: "email alredyin use"
            
        });
        };

        await clientModel.create({
            cl_nome: nome,
            cl_email: email,
            cl_senha: senha,
        });
        const en_id = await clientModel.findOne({cl_email:email});
        if(en_id != null){
            await clientAddressModel.create({
            _id: en_id._id,   
            en_cep: cep,
            en_logradouro: logradouro,
            en_numero: numero,
            en_bairro: bairro,
            en_complemento: complemento ? complemento : null,
        });
        };
        
        return res.status(201).json({
            request: "OK",
            route: "create a client",
            
        });
    } catch (error) {
        return res.status(400).json({
        request: "Fail",
        route: `could not create client`,
    });
    }
}
export async function updateClient(req, res) {
    
    try {
    const id = req.params.id;
     const {
        nome, 
        email, 
        senha, 
        cep, 
        logradouro, 
        numero, 
        bairro, 
        complemento
    } = req.body;
    const updatedClient = await clientModel.findOneAndUpdate({_id: id}, {
        cl_nome: nome,
        cl_email: email,
        cl_senha: senha,
    });
    const updatedClientAddress=  await clientAddressModel.findOneAndUpdate({_id: id}, {   
        en_cep: cep,
        en_logradouro: logradouro,
        en_numero: numero,
        en_bairro: bairro,
        en_complemento: complemento ? complemento : null,
    });

        return res.status(200).json({
            request: "OK",
            route: `update client of id: ${id}`,
            data: { 
                updatedClient,
                updatedClientAddress
             }
        });
    } catch (error) {
        return res.status(400).json({
            request: "Fail",
            route: `could not update order of id: ${id}`,
        });
    }
}

export async function deleteClient(req, res) {
    try {
        const id = req.params.id;
        await clientModel.findByIdAndDelete({_id: id})
        await clientAddressModel.findByIdAndDelete({_id: id})
        res.status(200).json({
            request: "OK",
            route: `delete client of id: ${id}`
        });
    } catch (error) {
        return res.status(406).json({
            request: "Fail",
            route: `could not delete client of id: ${id}, id might be inexistence or alredy deleted`,
        });
    }
}