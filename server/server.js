console.log("THIS IS THE CORRECT SERVER FILE 🚀");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://spoorthisgowda1977_db_user:xC9RNxWvYt4597Bk@cluster0.tsxk0l6.mongodb.net/adaptiveIQ?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected Successfully ✅"))
.catch((err) => console.log("MongoDB Error ❌", err));

app.use("/api/game", require("./routes/game"));
app.use("/api/iq", require("./routes/iq"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/questions", require("./routes/questions"));

app.get("/", (req, res) => {
    res.send("Adaptive IQ Assessment Backend Running 🚀");
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});

const gameRoutes = require("./routes/game");
app.use("/api/game", gameRoutes);