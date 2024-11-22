const express = require('express');
const { getTransactions } = require('../controllers/transactionController');
const { getStatistics } = require('../controllers/statsController');
const { getBarChart } = require('../controllers/chartController');
const seedDatabase = require('../utils/fetchData');

const router = express.Router();

router.get('/seed', async (req, res) => {
  await seedDatabase();
  res.send('Database seeded');
});

router.get('/transactions', getTransactions);
router.get('/statistics', getStatistics);
router.get('/bar-chart', getBarChart);

module.exports = router;
