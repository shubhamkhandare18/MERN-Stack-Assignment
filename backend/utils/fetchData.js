const axios = require('axios');
const Transaction = require('../models/Transaction');

const seedDatabase = async () => {
  const url = 'https://s3.amazonaws.com/roxiler.com/product_transaction.json';
  try {
    const { data } = await axios.get(url);
    await Transaction.deleteMany(); // Clear old data
    await Transaction.insertMany(data);
    console.log('Database initialized');
  } catch (error) {
    console.error('Error seeding database', error);
  }
};

module.exports = seedDatabase;
