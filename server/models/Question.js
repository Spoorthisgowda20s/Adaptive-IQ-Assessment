const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    questionText: String,
    options: [String],
    correctAnswer: String,
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        default: "easy"
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Question", questionSchema);