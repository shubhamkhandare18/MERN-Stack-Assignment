const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  sold: Boolean,
  category: String,
  dateOfSale: Date,
});

module.exports = mongoose.model('Transaction', transactionSchema);
