const mongoose = require('mongoose');

const productShcema = mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true,min:0},
    stock:{type:Number,required:true,min:0},
    category:{type:String,required:true},
    ImgageURL:{type:String,default:''},
})

const Product = mongoose.model('Products',productShcema)

module.exports = Product