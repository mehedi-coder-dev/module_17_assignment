const mongoose = require('mongoose');

const cartItemSchema = mongoose.Schema({
    user :{type:mongoose.Types.ObjectId,required:true,ref:User},
    product:{type:mongoose.Types.ObjectId,required:true,ref:Product},
    quantity:{type:Number,required:true,min:1}
    
})


const CartItem = mongoose.model('cartItem',cartItemSchema);

module.exports = CartItem;