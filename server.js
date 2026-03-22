const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require("./routes/authRoutes");
const bankRoutes = require("./routes/bankRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/bank", bankRoutes);

// MongoDB Connection
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");

    app.listen(5000, () => {
      console.log("🚀 Server running on port 5000");
    });

  } catch (error) {
    console.log("❌ DB Error:", error);
  }
};

startServer();