import sellModel from "../model/sellModel.js";
import orderModel from "../model/orderSchema.js";
import clientModel from "../model/clientSchema.js";
import clientAddressModel from "../model/clientAddressSchema.js";

export async function getAllSells(req, res) {
    try {
        const sells = await sellModel.find();
        return res.status(200).json({
            request: "OK",
            route: "get all sells",
            data: sells
        });
    } catch (error) {
        return res.status(204).json({
            request: "Fail",
            route: "there is no sell on the data base",
        });
    }
}
export async function getSellById(req, res) {
    try {
        const id = req.params.id;
        const foundedSell = await sellModel.findById(id)
        return res.status(200).json({
            request: "OK",
            route: `get sell by id, sell selected ${id}`,
            data: foundedSell
        });
    } catch (error) {
        return res.status(204).json({
            request: "Fail",
            route: `sell id is inexistence ${id}`,
            data: foundedSell
        });
    }
}
export async function createSell(req, res) {
    try {
        const { orderId } = req.body;
        const foundedOrder = await orderModel.findById(orderId);
        const client = await clientModel.findById(foundedOrder.pe_cl_id);
        const clientAddress = await clientAddressModel.findById(client._id);
        const createSell = await sellModel.create({
            vl_cl_id: client._id,

            vl_pe_id: foundedOrder.pe_cl_id,

            vl_cliente: client.cl_nome,

            vl_fatura: foundedOrder.pe_preco_faturado,

            vl_cep: clientAddress.en_cep,

            vl_logradouro: clientAddress.en_logradouro,

            vl_bairro: clientAddress.en_bairro,

            vl_numero: clientAddress.en_numero,

            vl_complemento: clientAddress.en_complemento,

            vl_situacao: 2,

        });
       
        return res.status(201).json({
            request: "OK",
            route: "create sell",
            data: createSell,
        });
    } catch (error) {
        return res.status(400).json({
            request: "Fail",
            data: "order not found"
        })
    }
}
export async function updateSell(req, res) {
    try {
        const id = req.params.id;
        const { 
            cliente,
            fatura,
            cep,
            logradouro,
            bairro,
            numero,
            complemento,
        } = req.body
        const updatedSell = await sellModel.findByIdAndUpdate({_id: id}, {
            vl_cliente: cliente,

            vl_fatura: fatura,

            vl_cep: cep,

            vl_logradouro: logradouro,

            vl_bairro: bairro,

            vl_numero: numero,

            vl_complemento: complemento,

        })
        return res.status(201).json({
            request: "OK",
            route: `update sell of id: ${id}`,
            data: updatedSell
        });
    } catch (error) {
        return res.status(406).json({
            request: "OK",
            route: `could not update sell of id: ${id}`,
        });
    }
}
export async function deleteSells(req, res) {
    try {
        const id = req.params.id;
        const deletedSell = await sellModel.findByIdAndDelete({_id: id})
        return res.status(200).json({
            request: "OK",
            route: `delete sell of id: ${id}`,
            data: deletedSell
        });
    } catch (error) {
        return res.status(406).json({
            request: "OK",
            route: `could not delete sell of id: ${id}`,
        });
    }
}