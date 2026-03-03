import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
name: string;
description: string;
price: number;
stock: number;
category: string;
createdAt: Date;

}

const productSchema: Schema = new Schema({
    name: { type: String, required: true },
    lastname: {type: String, required: true},
    age: { type: Number, required: true },
    age: { type: Number, required: true },
});

const Product = mongoose.model<IProduct>('Product', productSchema, 'Product');

export default Product;