const mongoose = require('mongoose')

const listSchema =mongoose.Schema({
    category:{type:String,require:true},
    description:{type:String,require:true},
    productId:{type:Number,require:true},
    price:{type:Number,require:true},
    image:{type:String,require:true},
})

const Addlist = mongoose.model('Addlist',listSchema)
module.exports = Addlist