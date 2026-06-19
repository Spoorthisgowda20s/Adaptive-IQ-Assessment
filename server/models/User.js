const mongoose = require("mongoose");   // 🔥 THIS WAS MISSING

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    createdAt: { type: Date, default: Date.now },
    currentLevel: { type: String, default: "easy" },
    unlockedLevels: { type: [String], default: ["easy"] },
    totalIQScore: { type: Number, default: 0 },

    correctStreak: { type: Number, default: 0 },
    wrongStreak: { type: Number, default: 0 }
});

module.exports = mongoose.model("User", userSchema);