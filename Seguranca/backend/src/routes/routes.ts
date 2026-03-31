import { Express } from 'express'
import express from 'express'
import products from './product.ts'
import auth from './auth.ts'

export default function (app: Express) {
    app
       .use(express.json())
       .use('/api/products', products)
       .use('/api/auth', auth)

}