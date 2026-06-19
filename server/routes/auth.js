const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

console.log("Auth route loaded ✅");

const SECRET_KEY = "adaptiveIQSecretKey";

// ✅ TEST ROUTE (ADD THIS)
router.get("/test", (req, res) => {
    res.send("Auth Route Working 🚀");
});

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser)
    return res.status(400).json({ message: "User already exists" });

  const user = new User({ name, email, password });
  await user.save();

  res.json({ user });  // ✅ MUST RETURN LIKE THIS
});
// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return res.status(400).json({ message: "User not found" });

  if (user.password !== password)
    return res.status(400).json({ message: "Invalid password" });

  res.json({ user });   // ✅ MUST BE LIKE THIS
});

module.exports = router;