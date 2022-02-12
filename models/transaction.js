// Dependancy
const mongoose = require("mongoose");

// Create mongoose schema
const Schema = mongoose.Schema;

// New Schema
const transactionSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  value: {
    type: Number,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
});


// Create Transaction Model
const Transaction = mongoose.model("Transaction", transactionSchema);

// Export
module.exports = Transaction;