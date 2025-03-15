const express = require('express');
const app = express();
app.use(express.json());

let scores = [];

app.post('/scores', (req, res) => {
    let score = req.body.score;
    if (!score) {
        return res.status(400).send("Score is required");
    }
    let newScore = { id: scores.length + 1, score: score };
    scores.push(newScore);
    res.status(201).send(newScore);
});

app.get('/scores', (req, res) => {
    let sortedScores = scores.sort((a, b) => b.score - a.score);
    res.send(sortedScores);
});

app.delete('/scores/:id', (req, res) => {
    let id = parseInt(req.params.id);
    scores = scores.filter(s => s.id !== id);
    res.send({ message: "Score deleted" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000...");
});