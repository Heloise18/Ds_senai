import express, { Request, Response, Router } from "express";
import { request } from "node:http";
import { validateDelete, validateFilterAll, validateFilterByID, validateRegister, validateUpdate } from "../middlewares/productsMiddleware.ts";
import productsController from "../controllers/productsController.ts";
const router: Router = express.Router();

router 

    .post("/post",validateRegister,productsController.create )
    .get("/get/:name/:category/:minPrice/:maxPrice/:inStock",validateFilterAll,productsController.findAll)
    .get("/get/:id",validateFilterByID, productsController.findByID)
    .put("/put/:id",validateUpdate, productsController.update)
    .delete("/delete/:id",validateDelete,productsController.remove)

export default router;       

