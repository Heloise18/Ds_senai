import {Request, Response, NextFunction } from "express";
import Product from "../models/products.ts";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const {name,description, price, stock, category, createdAt} = req.body
    
    if ( !name || !description || !price || !stock || !category || !createdAt ) {
        return res.status(400).send({error: "Campos obrigatórios devem ser preenchidos"})
    }

    // if(name != ){
    //     return res.status(404).send({error: "Não foi possivel achar -name-"})
    // }

    // if(description != Product.description){
    //     return res.status(404).send({error: "Não foi possivel achar -description-"})
    // }
    
    // if( price != Product.price){
    //     return res.status(404).send({error: "Não foi possivel achar -price-"})
    // }

    next();

}

export const validateFilterAll = (req: Request, res: Response, next: NextFunction) => {
    const {name,description, price, stock, category, createdAt} = req.body

    if ( !name || !description || !price || !stock || !category || !createdAt ) {
        return res.status(400).send({error: "Campos obrigatórios devem ser preenchidos"})
    }

    next();
    
}

export const validateFilterByID = (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params
    
    if ( !id ) {
        return res.status(400).send({error: "ID necessario!"})
    }
    next();
    
}

export const validateUpdate = (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.body
    
    if ( !id ) {
        return res.status(400).send({error: "ID necessario!"})
    }
    next();
    
}

export const validateDelete = (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.body
    
    if ( !id ) {
        return res.status(400).send({error: "ID necessario!"})
    }
    next();
    
}