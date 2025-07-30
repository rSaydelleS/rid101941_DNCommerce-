import orderModel from "../model/orderSchema.js";
import productModel from "../model/productSchema.js";
import clientModel from "../model/clientSchema.js";

export async function getAllOrder(req, res) {
    try {
        const orders = await orderModel.find();
        return res.status(200).json({
            request: "OK",
            route: "get all order registers",
            data: orders
        });
    } catch (error) {
        return res.status(404).json({
            request: "Fail",
            route: "error, there is no orders",
        });
    }
}
export async function getSingleOrder(req, res) {
    try {
        const id = req.params.id;
        const foundedOrder = await orderModel.findById(id);
        return res.status(200).json({
            request: "OK",
            route: `get order by id, order selected ${id}`,
            data: foundedOrder,
        });
    } catch (error) {
        return res.status(404).json({
            request: "Fail",
            route: `order id ${id} is not existent`,
        });
    }
}
export async function getOrders(req, res) {
    try {
        const { situacaoId } = req.body
        
        if(situacaoId === 1) {
            const foundedOrders = await orderModel.find({pe_situacao: 1});
            return res.status(200).json({
                request: "OK",
                route: `get open orders `,
                data: foundedOrders,
            });
        }
        
        if(situacaoId === 2) {
            const foundedOrders = await orderModel.find({pe_situacao: 2});
            return res.status(200).json({
                request: "OK",
                route: `get closed orders `,
                data: foundedOrders,
            });
        }
        if(situacaoId === 3) {
            const foundedOrders = await orderModel.find({pe_situacao: 3});
            return res.status(200).json({
                request: "OK",
                route: `get canceled orders `,
                data: foundedOrders,
            });
        }
    return res.status(400).json({
        request: "OK",
        route: "orders not created yet"
    })        
    } catch (error) {
        return res.status(400).json({
            request: "Fail",
            route: `error, order not defined`,
        });
    }
}

export async function createOrder(req, res) {
    try {
        const {
            clientId,
            productId,
        } = req.body
        const foundedClient = await clientModel.findOne({_id: clientId});
        const foundedProduct = await productModel.findOne({_id: productId});
        const createOrder = await orderModel.create({
            pe_cl_id: foundedClient._id,
            pe_pd_id: foundedProduct._id,
            pe_nome: foundedProduct.pd_nome,
            pe_descricao: foundedProduct.pd_descricao,
            pe_preco_faturado: foundedProduct.pd_preco_promocao,
            pe_situacao: 1,
        })
        return res.status(201).json({
            request: "OK",
            route: "create a new order",
            data: createOrder
        });
    } catch (error) {
        return res.status(400).json({
            request: "Fail",
            route: "missing info to create a new order",
        });
    }
}
export async function deleteOrder(req, res) {
    try {
        const id = req.params.id;
        const deletedOrder = await orderModel.findByIdAndDelete({_id: id})
        return res.status(200).json({
            request: "OK",
            route: `delete order of id: ${id}`,
            data: deletedOrder
        });
    } catch (error) {
        return res.status(406).json({
            request: "Fail",
            route: `could not delete order of id: ${id}, id might be inexistence or alredy deleted`,
        });
    }
}