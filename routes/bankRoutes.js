const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

// Protected Route
router.get("/account", auth, (req, res) => {
  res.json({
    message: "✅ Welcome to your bank account",
    userId: req.user.id
  });
});

module.exports = router;