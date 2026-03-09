import {  Request, Response} from "express";
import Product from "../models/products.ts";


class productsController {

    static async create(req: Request, res: Response){
        
        const {name,description, price, stock, category, createdAt} = req.body
        const products = new Product({name,description, price, stock, category, createdAt})

        try {
            await products.save()
            return res.status(200).send({message:  `Produto ${name} cadastrado com sucesso` });
            
        } catch (error) {
            return res.status(500).send({response:"Erro ao criar produto", error}); 
        }

    }

    static async findAll(req: Request, res: Response){
    const {name, category, minPrice, maxPrice, inStock} = req.params
    
    try {

        const products = await Product.find({ name: name, category: category, })
        
        if(name != Name){
            res.status(404).send({ message: 'Erro  param name incorreto' });   
        }

        const Category = await Product.find(category)

        if(Category != category){
            res.status(404).send({ message: 'Erro  param Category incorreto' });   
        }
        const product = await Product.find({name, category, minPrice, maxPrice, inStock});

        
    } catch (error) {
        
    }

    }

    static async findByID(req: Request, res: Response){
        const {id} = req.params
        
        try {
            const product = await Product.findByID(id);
            res.status(200).send({product: product});
         
        } catch (error) {
            res.status(404).send({ message: 'Erro ao buscar o produto', error });
        }

    }

    static async update(req: Request, res: Response){
        const { id } = req.params;
        const { name,description, price, stock, category, createdAt } = req.body;

        try {  
            const product = await Product.findByIdAndUpdate(id , {name,description, price, stock, category, createdAt})

            if(!product){
                res.status(404).send({ message: 'Produto não encontrado' });
            }
            res.status(200).send(product)
        
        } catch (error) {
            res.status(500).send({ message:`Erro ao atualizar o produto ${name}`, error })
        }
    }

    static async remove(req: Request, res: Response){
        const { id } = req.params
       
        try {
            const product = await Product.findByIdAndDelete(id);
            
            if (!product) {
                res.status(404).send({ message: 'Produto não encontrado' });
            }
            res.status(200).send({ message: 'Produto deletado com sucesso' });

        } catch (error) {
            res.status(500).send({ message: 'Erro ao deletar o produto', error });
        }

    }
    
}

export default productsController