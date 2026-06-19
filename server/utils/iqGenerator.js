// utils/iqGenerator.js

function generateNumberSeries(level) {
    let start = Math.floor(Math.random() * 10);
    let multiplier = 2;

    if (level === "medium") multiplier = 3;
    if (level === "hard") multiplier = 4;

    let series = [
        start,
        start * multiplier,
        start * multiplier * multiplier,
        start * multiplier * multiplier * multiplier
    ];

    const correctAnswer = series[3] * multiplier;

    return {
        questionText: `What comes next in the series? ${series.join(", ")}, ?`,
        options: [
            correctAnswer,
            correctAnswer + 2,
            correctAnswer - 2,
            correctAnswer + 4
        ].sort(() => Math.random() - 0.5),
        correctAnswer
    };
}

module.exports = { generateNumberSeries };