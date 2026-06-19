const router = require("express").Router();

// Helper: Generate number series question
function generateNumberSeries(difficulty) {
    let start = Math.floor(Math.random() * 10) + 1;
    let step;

    if (difficulty === "easy") {
        step = 2;
    } else if (difficulty === "medium") {
        step = Math.floor(Math.random() * 5) + 2;
    } else {
        step = Math.floor(Math.random() * 10) + 3;
    }

    let series = [];
    for (let i = 0; i < 4; i++) {
        series.push(start + i * step);
    }

    const correctAnswer = start + 4 * step;

    const options = [
        correctAnswer,
        correctAnswer + step,
        correctAnswer - step,
        correctAnswer + 2
    ].sort(() => Math.random() - 0.5);

    return {
        questionText: `What comes next in the series? ${series.join(", ")}, ?`,
        options,
        correctAnswer
    };
}

// Generate IQ Question
router.get("/generate", (req, res) => {
    const difficulty = req.query.difficulty || "easy";

    const question = generateNumberSeries(difficulty);

    res.json({
        difficulty,
        ...question
    });
});

const User = require("../models/User");

// Evaluate Answer
router.post("/submit", async (req, res) => {
    const { userId, selectedAnswer, correctAnswer } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    let isCorrect = selectedAnswer == correctAnswer;

    if (isCorrect) {
        user.correctStreak += 1;
        user.wrongStreak = 0;
        user.totalIQScore += 10;
    } else {
        user.wrongStreak += 1;
        user.correctStreak = 0;
        user.totalIQScore -= 5;
    }

    // Adaptive logic
    if (user.correctStreak >= 3) {
        if (user.currentLevel === "easy") user.currentLevel = "medium";
        else if (user.currentLevel === "medium") user.currentLevel = "hard";
        user.correctStreak = 0;
    }

    if (user.wrongStreak >= 2) {
        if (user.currentLevel === "hard") user.currentLevel = "medium";
        else if (user.currentLevel === "medium") user.currentLevel = "easy";
        user.wrongStreak = 0;
    }

    await user.save();

    res.json({
        isCorrect,
        newLevel: user.currentLevel,
        totalIQScore: user.totalIQScore
    });
});

module.exports = router;