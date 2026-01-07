import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  category: { 
    type: String, 
    required: true 
  },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

// Check if model already exists to prevent overwrite error during hot reload
const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
