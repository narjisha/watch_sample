var express = require('express');
var router = express.Router();
var productController = require('../controller/productcontroller')


router.post('/addproduct', productController.productAdd);
router.get('/listproduct',productController.productList);
router.get('/getProductById/:id',productController.getProductById)
router.put('/updateProduct/:id', productController.updateProduct);
router.delete('/deleteProduct/:id', productController.deleteProduct);

module.exports = router