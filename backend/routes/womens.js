var express = require("express");
var router = express.Router();
var Wproduct = require("../models/girlsproductmodel");

router.get("/", async (req, res) => {
  const womensProduct = [
    {
      id: 1,
      image: "/image/l1.webp",
      title: "DISCOVER",
    },
    {
      id: 2,
      image: "/image/l2.jpg",
      title: "DISCOVER",
    },
    {
      id: 3,
      image: "/image/l3.webp",
      title: "DISCOVER",
    },
    {
      id: 4,
      image: "/image/l4.jpg",
      title: "DISCOVER",
    },
    {
      id: 5,
      image: "/image/l5.webp",
      title: "DISCOVER",
    },
    {
      id: 6,
      image: "/image/l6.webp",
      title: "DISCOVER",
    },
    {
      id: 7,
      image: "/image/l7.jpg",
      title: "DISCOVER",
    },
    {
      id: 8,
      image: "/image/l8.jpg",
      title: "DISCOVER",
    },
    {
      id: 9,
      image: "/image/l9.webp",
      title: "DISCOVER",
    },
    {
      id: 10,
      image: "/image/l10.webp",
      title: "DISCOVER",
    },
    {
      id: 11,
      image: "/image/l17.webp",
      title: "DISCOVER",
    },
    {
      id: 12,
      image: "/image/l12.webp",
      title: "DISCOVER",
    },
    {
      id: 13,
      image: "/image/l13.webp",
      title: "DISCOVER",
    },
    {
      id: 14,
      image: "/image/l14.webp",
      title: "DISCOVER",
    },
    {
      id: 15,
      image: "/image/l15.webp",
      title: "DISCOVER",
    },
    {
      id: 16,
      image: "/image/l16.webp",
      title: "DISCOVER",
    },
  ];
  try {
    // Wproduct.deleteMany( {} );
    const womenproducts = await Wproduct.find({});
    res.json({ womenproducts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
