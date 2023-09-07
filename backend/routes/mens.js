var express = require("express");
var Product = require('../models/productmodel');
var router = express.Router();

router.get("/", async (req, res) => {
  const mensProduct = [
    {
      id: 1,
      image: "/image/w1.webp",
      title: "DISCOVER",
    },
    {
      id: 2,
      image: "/image/w2.webp",
      title: "DISCOVER",
    },
    {
      id: 3,
      image: "/image/w3.webp",
      title: "DISCOVER",
    },
    {
      id: 4,
      image: "/image/w4.webp",
      title: "DISCOVER",
    },
    {
      id: 5,
      image: "/image/w5.webp",
      title: "DISCOVER",
    },
    {
      id: 6,
      image: "/image/w6.webp",
      title: "DISCOVER",
    },
    {
      id: 7,
      image: "/image/w7.webp",
      title: "DISCOVER",
    },
    {
      id: 8,
      image: "/image/w8.webp",
      title: "DISCOVER",
    },
    {
      id: 9,
      image: "/image/w9.webp",
      title: "DISCOVER",
    },
    {
      id: 10,
      image: "/image/w10.webp",
      title: "DISCOVER",
    },
    {
      id: 11,
      image: "/image/w11.webp",
      title: "DISCOVER",
    },
    {
      id: 12,
      image: "/image/w12.jpeg",
      title: "DISCOVER",
    },
  ];
  try {
    const products = await Product.find({});
    res.json({ products }); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
