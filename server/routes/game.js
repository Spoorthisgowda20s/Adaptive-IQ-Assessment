const express = require("express");
const router = express.Router();
const GameSession = require("../models/GameSession");

router.post("/save", async (req, res) => {
  const { userId, score, level } = req.body;

  const session = new GameSession({
    userId,
    score,
    level,
    date: new Date(),
  });

  await session.save();

  res.json({ message: "Game saved successfully" });
});

module.exports = router;