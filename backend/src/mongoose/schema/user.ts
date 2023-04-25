import mongoose from "mongoose";
import { productInterface, productSchema } from "./product";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: Number,
  image: String,
  fav: [
    {
      productId: mongoose.SchemaTypes.ObjectId,
      parentId: mongoose.SchemaTypes.ObjectId,
      title: String,
      path: String,
      price: Number,
    },
  ],
  cart: [
    {
      productId: mongoose.SchemaTypes.ObjectId,
      parentId: mongoose.SchemaTypes.ObjectId,
      count: Number,
      title: String,
      path: String,
      price: Number,
    },
  ],
});

export const userCollection = mongoose.model("users", userSchema);
