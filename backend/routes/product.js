var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  const productsData = [
    {
      id: 1,
      image: '/image/w1.webp',
    },
    {
      id: 2,
      image: '/image/w2.webp',
    },
    {
      id: 3,
      image: '/image/w3.webp',
    },
    {
      id: 4,
      image: '/image/w4.webp',
    },
    {
      id: 5,
      image: '/image/w5.webp',
    },
    {
      id: 6,
      image: '/image/w6.webp',
    },
    {
      id: 7,
      image: '/image/w7.webp',
    },
    {
      id: 8,
      image: '/image/w8.webp',
    },
    {
      id: 9,
      image: '/image/w9.webp',
    },
    {
      id: 10,
      image: '/image/w10.webp',
    },
  ];
  res.json(productsData);
});

module.exports = router;
