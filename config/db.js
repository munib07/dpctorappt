const mongoose = require('mongoose');
const { connect, connection, set } = mongoose;

const connectDB = async () => {
  const mongoUrl = process.env.MONGO_URL || "";
  try {
    set('strictQuery', false);
    connect(mongoUrl);
    console.log(`Mongodb connected ${connection.host}`);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`);
  }
};

module.exports = connectDB;