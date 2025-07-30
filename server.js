import express, { json, urlencoded } from "express";
import productRouter from "./routes/productsRoutes.js";
import clientRouter from "./routes/clientRoutes.js";
import stockRouter from "./routes/stockRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import sellRouter from "./routes/sellRouter.js";
import cors from "cors";
import connection from "./config/connection.js";
import "dotenv/config";

const PORT = process.env.PORT || 8080;
const server = express();

server.use(urlencoded({extended: true}));
server.use(json());
server.use(cors());

server.use("/products", productRouter);
server.use("/client", clientRouter);
server.use("/stock", stockRouter); 
server.use("/order", orderRouter); 
server.use("/sell", sellRouter); 

server.listen(PORT, () => {
    try {
        console.log(`Servidor operacional na port ${PORT}`);
        connection();
    } catch (error) {
        console.error(error);
    }
})