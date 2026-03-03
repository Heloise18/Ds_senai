import express, { Request, Response, Router } from "express";
import { request } from "node:http";
import PersonController from '../controllers/productsController.ts'
import { validateRegister } from "../middlewares/productsMiddleware.ts";
const router: Router = express.Router();

router 

    .post("/post",validateRegister, PersonController.postUser)
    .get("/get",PersonController.getUsers)
    .put("/put/:id",PersonController.putUSer)
    .delete("/delete/:id",PersonController.deleteUser)

export default router;       

