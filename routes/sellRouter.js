import express from "express";
import {getAllSells, getSellById, deleteSells, createSell} from "../controllers/sellController.js";

const sellRouter = express.Router();

sellRouter.get("/", getAllSells);

sellRouter.get("/:id", getSellById);

sellRouter.post("/create", createSell);

sellRouter.put("/update/:id", getSellById);

sellRouter.delete("/delete/:id", deleteSells);

export default sellRouter;