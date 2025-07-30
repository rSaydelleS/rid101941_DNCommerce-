import express from "express"
import {getAllProduct, createProduct,getProductById,updateProduct, deleteProduct  } from "../controllers/productsControllers.js";

const productRouter = express.Router();


productRouter.get("/", getAllProduct);

productRouter.get("/:id", getProductById);

productRouter.post("/create", createProduct);

productRouter.put("/update/:id", updateProduct);

productRouter.delete("/delete/:id", deleteProduct);

export default productRouter;