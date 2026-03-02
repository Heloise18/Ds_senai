import express, { Request, Response, Router } from "express";
import { request } from "node:http";
import PersonController from '../controllers/personController.ts'
import { validateRegister } from "../middlewares/personMiddleware.ts";
const router: Router = express.Router();

router 

    .post("/post",validateRegister, PersonController.postUser)
    .get("/get",PersonController.getUsers)
    .put("/put/:id",PersonController.putUSer)
    .delete("/delete/:id",PersonController.deleteUser)

export default router;       

