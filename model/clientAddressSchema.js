import mongoose from "mongoose";
import connection from "../config/connection.js";

connection();
const { Schema } = mongoose;

const clientAddressSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    en_cep: {
        type: String,
        required: true
    },
    en_logradouro: {
        type: String,
        required: true
    },
    en_numero: {
        type: String,
        required: true
    },
    en_bairro: {
        type: String,
        required: true
    },
    en_complemento: {
        type: String,
    },
}, 
{
    timestamp: true,
});

const clientAddressModel = mongoose.model("cliente_endereco", clientAddressSchema);
export default clientAddressModel;