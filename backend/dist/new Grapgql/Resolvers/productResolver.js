"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productResolver = void 0;
const product_js_1 = __importDefault(require("../../mongoose/schema/product.js"));
exports.productResolver = {
    Query: {
        products() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield product_js_1.default.find({});
            });
        },
        product(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield product_js_1.default.findById(args.id);
            });
        },
    },
    Mutation: {
        filterByPrice(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(args);
                if (args.price === 1) {
                    return product_js_1.default.find({}).sort({ price: 1 });
                }
                else if (args.price === -1) {
                    return product_js_1.default.find({}).sort({ price: -1 });
                }
                else {
                    console.log("by price");
                    return product_js_1.default.find({ price: { $lte: args.price } });
                }
            });
        },
        filterByDate(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                if (args.date === 1) {
                    return product_js_1.default.find({}).sort({ createdAt: 1 });
                }
                else if (args.date === -1) {
                    return product_js_1.default.find({}).sort({ createdAt: -1 });
                }
            });
        },
        filterByRate(_, args) {
            return product_js_1.default.aggregate([
                {
                    $project: {
                        _id: 1,
                        title: 1,
                        description: 1,
                        price: 1,
                        stock: 1,
                        category: 1,
                        state: 1,
                        images: 1,
                        rating: 1,
                        reviews: 1,
                        rateAvg: { $avg: "$rating" },
                        avgReviewRating: { $avg: "$reviews.rate" },
                    },
                },
                {
                    $addFields: {
                        avgRate: {
                            $divide: [{ $add: ["$rateAvg", "$avgReviewRating"] }, 2],
                        },
                    },
                },
                { $sort: { avgRate: args.rate } },
            ]);
        },
        filterBycatageory(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                return product_js_1.default.find({ category: args.category });
            });
        },
        filterByState(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                return product_js_1.default.find({ state: args.state });
            });
        },
        filterAllTypes(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    return yield product_js_1.default.aggregate([
                        {
                            $project: {
                                _id: 1,
                                title: 1,
                                description: 1,
                                price: 1,
                                stock: 1,
                                category: 1,
                                state: 1,
                                images: 1,
                                rating: 1,
                                reviews: 1,
                                avgRate: { $avg: "$rating" },
                            },
                        },
                        {
                            $match: {
                                avgRate: { $lte: args.input.rate },
                                price: { $lte: args.input.price },
                                category: { $in: args.input.category },
                                state: { $in: args.input.state },
                            },
                        },
                    ]);
                }
                catch (err) {
                    console.log(err.message);
                }
            });
        },
        searchProducts(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(args);
                return yield product_js_1.default.find({
                    $or: [
                        { category: { $regex: args.word, $options: "i" } },
                        { title: { $regex: args.word, $options: "i" } },
                    ],
                });
            });
        },
        updateProduct(_, { input }) {
            return __awaiter(this, void 0, void 0, function* () {
                yield product_js_1.default.findByIdAndUpdate(input._id, input);
                return { msg: "product updated successfully", status: 200 };
            });
        },
        addProduct(_, { input }) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(input);
                return product_js_1.default.create(Object.assign(Object.assign({}, input), { deliveredAt: null }));
            });
        },
    },
};