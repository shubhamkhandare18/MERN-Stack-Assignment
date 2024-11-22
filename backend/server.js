const express = require('express');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api', apiRoutes);

connectDB();

app.listen(5000, () => console.log('Server running on port 5000'));
