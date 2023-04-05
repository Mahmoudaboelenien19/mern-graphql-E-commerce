"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCollection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const product_1 = require("./product");
const userSchema = new mongoose_1.default.Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
    fav: [product_1.productSchema],
    cart: [product_1.productSchema],
});
exports.userCollection = mongoose_1.default.model("users", userSchema);