import mongoose from "mongoose";
import connection from "../config/connection.js";

connection();

const {Schema} = mongoose;

const orderSchema = new Schema({
    pe_cl_id: {
        type: mongoose.ObjectId,
    },
    pe_pd_id: {
        type: mongoose.ObjectId,
    },
    pe_nome: {
        type: String,
    },
    pe_descricao: {
        type: String,
    },
    pe_preco_faturado: {
        type: String,
    },
    pe_situacao: {
        type: Number,
    },
},
{
    timestamp: true
});

const orderModel = mongoose.model("pedido", orderSchema);
export default orderModel;