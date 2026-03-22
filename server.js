const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(`
    <h1>🏦 Banking API</h1>
    <h2>JWT Authentication System</h2>
    <p>✔ Register: /api/auth/register</p>
    <p>✔ Login: /api/auth/login</p>
    <p>✔ Account: /api/bank/account</p>
  `);
});
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