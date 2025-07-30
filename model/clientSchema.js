import mongoose from "mongoose";
import connection from "../config/connection.js";

const { Schema }= mongoose;

connection()
const clientSchema = new Schema({
    cl_nome: {
        type: String,
        required: true
    },
    cl_email: {
        type: String,
        required: true,
    },
    cl_senha: {
        type: String,
        required: true
    },
},
{
    timestamp: true
});

const clientModel = mongoose.model("cliente", clientSchema);
export default clientModel;