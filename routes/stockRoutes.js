import express from "express";
import { getAllStocks, getStockByCategory, getSingleStock, createStock, updateStock,deleteStock } from "../controllers/stockControllers.js";

const stockRouter = express.Router();

stockRouter.get("/", getAllStocks);

stockRouter.get("/category", getStockByCategory);

stockRouter.get("/:id", getSingleStock);

stockRouter.post("/create", createStock);

stockRouter.put("/update/:id", updateStock);

stockRouter.delete("/", deleteStock);

export default stockRouter;