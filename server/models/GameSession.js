const mongoose = require("mongoose");

const gameSessionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    level: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true
    },

    totalQuestions: {
        type: Number,
        default: 10
    },

    currentQuestionIndex: {
        type: Number,
        default: 0
    },

    correctAnswers: {
        type: Number,
        default: 0
    },

    wrongAnswers: {
        type: Number,
        default: 0
    },

    questions: [
        {
            questionText: String,
            options: [String],
            correctAnswer: String,
            timeLimit: Number,
            answered: { type: Boolean, default: false },
            selectedAnswer: String,
            isCorrect: Boolean,
            timeTaken: Number
        }
    ],

    completed: {
        type: Boolean,
        default: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("GameSession", gameSessionSchema);