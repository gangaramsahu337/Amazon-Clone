const Product = require("../models/ProductModel");
const asyncHandler = require("express-async-handler");
import { useParams } from "react-router-dom";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  // throw new Error("Some Eror");
  res.json(products);
});

const getProduct = asyncHandler(async (req, res) => {
  const { id } = useParams();
  const product = await Product.findById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
});

module.exports = { getProducts, getProduct };
