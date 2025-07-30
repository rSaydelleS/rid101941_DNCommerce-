import express from "express";
import {getAllOrder, getSingleOrder, getOrders, createOrder, deleteOrder} from "../controllers/orderControllers.js";

const orderRouter = express.Router();

orderRouter.get("/", getAllOrder); 

orderRouter.get("/:id", getSingleOrder);

orderRouter.post("/find", getOrders); 

orderRouter.post("/create", createOrder);

orderRouter.get("/delete/:id", deleteOrder);

export default orderRouter;