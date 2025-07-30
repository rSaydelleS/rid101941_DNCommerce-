import mongoose from "mongoose";
import connection from "../config/connection.js";

connection();
const { Schema } = mongoose;

const sellSchema = new Schema({
    vl_cl_id: {
        type: String
    },
    vl_pe_id: {
        type: String
    },
    vl_cliente: {
        type: String,
    },
    vl_fatura: {
        type: String,
    },
    vl_cep: {
        type: String,
    },
    vl_logradouro: {
        type: String,
    },
    vl_bairro: {
        type: String,
    },
    vl_numero: {
        type: String,
    },
    vl_complemento: {
        type: String,
    },
    vl_situacao: {
        type: Number,
    },
})

const sellModel = mongoose.model("venda", sellSchema);
export default sellModel;