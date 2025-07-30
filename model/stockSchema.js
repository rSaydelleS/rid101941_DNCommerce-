import mongoose from "mongoose";
import connection from "../config/connection.js";

const { Schema } = mongoose;

connection();
const stockSchema = new Schema({
    et_nome: {
        type: String,
        required: true,
    },
    et_descricao: {
        type: String,
        required: true,
    },
    et_preco: {
        type: String,
        required: true,
    }, 
    et_categoria: {
        type: Number,
        required: true,
    },
},
{
    timestamp: true
});

const stockModel = mongoose.model("estoque", stockSchema);
export default stockModel;