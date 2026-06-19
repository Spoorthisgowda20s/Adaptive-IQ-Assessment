const router = require("express").Router();
const Question = require("../models/Question");

// Add Question (Admin use)
router.post("/add", async (req, res) => {
    try {
        const newQuestion = new Question(req.body);
        await newQuestion.save();
        res.json({ message: "Question Added ✅" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Questions by Difficulty
router.get("/:difficulty", async (req, res) => {
    try {
        const questions = await Question.find({
            difficulty: req.params.difficulty
        });
        res.json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;