const express = require('express');
const mongoose = require('mongoose');

const app = express();

// MongoDB connection URI
const uri = "mongodb://Padmin:WeakPassword123%21@34.76.62.216:27017/admin?authSource=admin";

// Async function to connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit on failure
  }
}

// Connect to MongoDB, then start the server
connectDB().then(() => {
  app.listen(8080, () => {
    console.log('App listening at http://localhost:8080');
  });
});

// Example route
app.get('/', (req, res) => {
  res.send('Hello, your app is connected to MongoDB!');
});
