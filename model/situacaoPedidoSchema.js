import mongoose from "mongoose";
import connection from "../config/connection.js";

connection();
const { Schema } = mongoose;

const situacaoPedidoSchema = new Schema({
    _id: {
        type: Number,
        unique: true
    },
    st_nome: {
        type: String,
        unique: true
    }
});

const situacaoPedidoModel = mongoose.model("situacao_pedido", situacaoPedidoSchema);
export default situacaoPedidoModel;