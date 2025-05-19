import express from "express";
import enderecoController from "./controllers/enderecoController.js";

const routes = express();

routes.use("/endereco", enderecoController);

export default routes;