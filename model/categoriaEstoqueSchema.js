import mongoose from "mongoose";
import connection from "../config/connection.js";

connection();

const { Schema } = mongoose;

const categoriaEstoqueSchema = new Schema({
    _id: {
        type: Number,
        required: true,
    },
    ce_nome: {
        type: String,
        required: true,
    },
    ce_posicao: {
        type: Number,
        required: true,
    },
});

const categoriaEstoqueModel = mongoose.model("catergoria_estoque", categoriaEstoqueSchema);
export default categoriaEstoqueModel;