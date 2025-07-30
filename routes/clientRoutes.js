import express from "express";
import {getAllClients, getClientById, createClient, updateClient, deleteClient} from "../controllers/clientController.js";

const clientRouter = express.Router();

clientRouter.get("/", getAllClients);

clientRouter.get("/:id", getClientById);

clientRouter.post("/create", createClient);

clientRouter.put("/update/:id", updateClient);

clientRouter.delete("/delete/:id", deleteClient);

export default clientRouter;