import stockModel from "../model/stockSchema.js";
import categoriaEstoqueModel from "../model/categoriaEstoqueSchema.js";

export async function getAllStocks(req, res){
       try {
        const stockByCategory = await stockModel.find();
        return res.status(200).json({
        request: "OK",
        route: "get all stocks registers",
        data: stockByCategory
    });
       } catch (error) {
        return res.status(200).json({
        request: "OK",
        route: "get all stocks registers",
    });
       }
        
}

export async function getStockByCategory(req, res) {
    const categoryId = await req.body.categoryId;
    try {
        const stockByCategory = await stockModel.find({et_categoria: Number(categoryId)});
            return res.status(200).json({
            request: "OK",
            route: "get all stocks registers",
            data: stockByCategory
        });
    } catch (error) {
        return res.status(404).json({
            request: "Fail",
            route: "categoy not existence",
        });
    }
}
export async function getSingleStock(req, res) {
    const id = req.params.id;

    try {
        const foundedStock = await stockModel.findById({_id: id})
        res.status(200).json({
            request: "OK",
            route: `get stock by id, stock selected ${id}`,
            data: foundedStock
        });
    } catch (error) {
        res.status(400).json({
            request: "Fail",
            route: `Stock ${id}`,
            data: foundedStock
        });
    }
}
export async function createStock(req, res) {
    
    const {
        _id,
        et_nome,
        et_descricao,
        et_preco,
    } = await req.body;
    
    try {
        const ce_id = await categoriaEstoqueModel.findById(_id);

        if(!ce_id) {
            return res.status(201).json({
            request: "Fail",
            data: "posicao de estoque não fornecida",
        });
        }
        
        const stock = await stockModel.create({
            et_nome: et_nome,
            et_descricao: et_descricao,
            et_preco: et_preco, 
            et_categoria: ce_id._id,
        });
    
        return res.status(200).json({
            request: "OK",
            route: "create a stock",
            data: stock

        });
    } catch (error) {
        return res.status(400).json({
            request: "Fail",
            route: "can not create",
            data: ""
        });
    }
}
export async function updateStock(req, res) {
    const {
        et_nome,
        et_descricao,
        et_preco,
        et_categoria
    } = await req.body;
    const id = req.params.id;

    try {
        const updatedClient = await stockModel.findOneAndUpdate({_id: id}, {
        et_nome: et_nome,
        et_descricao: et_descricao,
        et_preco: et_preco,
        et_categoria: et_categoria
    });
        
        return res.status(201).json({
            request: "OK",
            route: `update stock of id: ${id}`,
            data:updatedClient
        });
    } catch (error) {
        return res.status(406).json({
            request: "Fail",
            route: `Stock of id: ${id} dont exist`,
            data: ""
        });
    }
}
export async function deleteStock(req, res) {
    const id = req.params.id;
    try {
        const deletedStock = await stockModel.findByIdAndDelete({_id: id})
        return res.status(200).json({
            request: "OK",
            route: `delete stock of id: ${id}`,
            data: deletedStock
        });
    } catch (error) {
        return res.status(406).json({
            request: "Fail",
            route: `Fail to delete, stock: ${id} not found`,
            data: ""
        });
    }
}