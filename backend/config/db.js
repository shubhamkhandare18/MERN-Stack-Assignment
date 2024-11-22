const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    await mongoose.createConnection(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s by default
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity 
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;
