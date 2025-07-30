import productModel from "../model/productSchema.js";
import stockModel from "../model/stockSchema.js";

export async function getAllProduct(req, res) {

    try {
        const productData = await productModel.find();
        return res.status(200).json({
            request: "OK",
            route: "get all products",
            data: productData
        });
    } catch (error) {
        return res.status(400).json({
            request: "Fail",
            route: "no products created",
        });
    }
}
export async function getProductById(req, res) {
    try {
        const id = req.params.id;
        const foundedProduct = await productModel.findById(id).exec();
        return res.status(200).json({
            request: "OK",
            route: `get product by id, product selected ${id}`,
            data: foundedProduct
        });
    } catch (error) {
        return res.status(400).json({
            request: "OK",
            route: `Product selected ${id} does not exist`,
        });
    }
}
export async function createProduct(req, res) {
    try {
        const { stockId, preco_promocao } = await req.body
        const foundedStock = await stockModel.findById(stockId);
        const createProduct = await productModel.create({
            pd_et_id: foundedStock._id,
            pd_nome: foundedStock.et_nome,
            pd_descricao: foundedStock.et_descricao,
            pd_categoria: foundedStock.et_categoria,
            pd_preco: foundedStock.et_preco,
            pd_preco_promocao: preco_promocao,
        });
        return res.status(201).json({
            request: "OK",
            route: "create a product",
            data: createProduct,
        });
    } catch (error) {
        return res.status(400).json({
            request: "Fail",
            route: "erro, some information is missing",
        });
    }
}
export async function updateProduct(req, res) {
    try {
        const id = await req.params.id;
        const {
            nome,
            descricao,
            preco_promocao
        } = await req.body
        const updatedProduct = await productModel.findOneAndUpdate({_id: id} , {
            pd_nome: nome,
            pd_descricao: descricao,
            pd_preco_promocao: preco_promocao
        });
        return res.status(201).json({
            request: "OK",
            route: `update product of id: ${id}`,
            data: updatedProduct
        });
    } catch (error) {
        return res.status(400).json({
            request: "OK",
            route: `error can not update product of id: ${id}`,
        });
    }
}
export async function deleteProduct(req, res) {
    try {
        const id = await req.params.id;
        const deletedProduct = await productModel.findByIdAndDelete({_id: id})
        return res.status(200).json({
            request: "OK",
            route: `delete product of id: ${id}`,
            data: deletedProduct
        });
    } catch (error) {
        return res.status(406).json({
            request: "OK",
            route: `error, product of id: ${id} is not existent or was alredy deleted`,
        });
    }
}