const Transaction = require('../models/Transaction');

const getTransactions = async (req, res) => {
  const { month, page = 1, perPage = 10, search = '' } = req.query;
  const startDate = new Date(`${month}-01`);
  const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);

  const query = {
    dateOfSale: { $gte: startDate, $lte: endDate },
    $or: [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
      { price: { $regex: search, $options: 'i' } },
    ],
  };

  const transactions = await find(query)
    .skip((page - 1) * perPage)
    .limit(perPage);

  res.json(transactions);
};
module.exports = {getTransactions};
