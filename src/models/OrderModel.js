const mongoose = require('mongoose');

// Define the Order schema
const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: {
      type: Number,
      default: 1,
      min: 1
    }
  }],
  totalAmount: {
    type: Number,
    required: true,
    min: 0
  },
  shippingAddress: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'Pending'
  }
});

// Create the Order model based on the schema
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;