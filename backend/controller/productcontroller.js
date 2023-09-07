const asyncHandler = require("express-async-handler");
var List = require("../models/productlistmodel");

exports.productAdd = asyncHandler(async (req, res) => {
  const category = req.body.category;
  const description = req.body.description;
  const productId = req.body.productId;
  const price = req.body.price;
  const image = req.body.image;

  try {
    const newlist = await List.create({
      category: category,
      description: description,
      productId: productId,
      price: price,
      image: image,
    });
    console.log(newlist);
    res.json({ newlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

exports.productList = asyncHandler(async (req, res) => {
  try {
    const products = await List.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

exports.getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    let product = await List.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occurred" });
  }
});


exports.updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { category, description, productId, price, image } = req.body;

  try {
    let product = await List.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    product.category = category;
    product.description = description;
    product.productId = productId;
    product.price = price;
    product.image = image;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occurred" });
  }
});



exports.deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    let product = await List.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await product.deleteOne(); // Use deleteOne() instead of remove()
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occurred" });
  }
});
