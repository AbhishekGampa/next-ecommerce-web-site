const mongoose = require("mongoose");

const dbUrl = "mongodb://127.0.0.1:27017/nextjs";

const dbConnection = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
};

export default dbConnection;
