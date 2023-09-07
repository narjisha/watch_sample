var express = require('express');
var router = express.Router();
router.get('/',(req,res)=>{
   const serviceData= [
    {
        id:'1',
        images:'/image/s1.webp',
        title:'OUR BOUTIQUES'
    },
    {
        id:'2',
        images:'/image/s2.webp',
        title:'PRODUCT CARE'
    },
    {
        id:'3',
        images:'/image/s3.webp',
        title:'EXTEND YOUR WARRANTY'
    }
   ]
   res.json(serviceData);
})



module.exports = router;
