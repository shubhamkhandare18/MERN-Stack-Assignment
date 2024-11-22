const Transaction = require('../models/Transaction');

const getStatistics = async (req, res) => {
  const { month } = req.query;
  const startDate = new Date(`${month}-01`);
  const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);

  const transactions = await Transaction.find({
    dateOfSale: { $gte: startDate, $lte: endDate },
  });

  const totalSaleAmount = transactions.reduce((sum, item) => sum + (item.sold ? item.price : 0), 0);
  const soldCount = transactions.filter((item) => item.sold).length;
  const notSoldCount = transactions.filter((item) => !item.sold).length;

  res.json({ totalSaleAmount, soldCount, notSoldCount });
};

module.exports = { getStatistics };