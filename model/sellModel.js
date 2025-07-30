import mongoose from "mongoose";
import connection from "../config/connection.js";

connection();
const { Schema } = mongoose;

const sellSchema = new Schema({
    ve_cl_id: {
        type: String
    },
    ve_pe_id: {
        type: String
    },
    ve_cliente: {
        type: String,
    },
    ve_fatura: {
        type: String,
    },
    ve_cep: {
        type: String,
    },
    ve_logradouro: {
        type: String,
    },
    ve_bairro: {
        type: String,
    },
    ve_numero: {
        type: String,
    },
    ve_complemento: {
        type: String,
    },
    ve_situacao: {
        type: Number,
    },
})

const sellModel = mongoose.model("venda", sellSchema);
export default sellModel;