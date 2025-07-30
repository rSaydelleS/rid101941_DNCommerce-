import mongoose from "mongoose";
import connection from "../config/connection.js";

const { Schema } = mongoose;

connection();
const producSchema = new Schema({
    pd_et_id: {
        type: mongoose.ObjectId,
    },
    pd_nome: {
        type: String,
    },
    pd_descricao: {
        type: String,
    },
    pd_categoria: {
        type: Number,
    },
    pd_preco_promocao: {
        type: String,
    },
},
{
    timestamp: true
});

const producModel = mongoose.model("produto", producSchema);
export default producModel;