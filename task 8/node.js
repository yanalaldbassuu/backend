const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.post('/games', async (req, res) => {
    let game = await prisma.game.create({ data: req.body });
    res.status(201).send(game);
});

app.get('/games', async (req, res) => {
    let games = await prisma.game.findMany();
    res.send(games);
});

app.get('/games/:id', async (req, res) => {
    let game = await prisma.game.findUnique({ where: { id: parseInt(req.params.id) } });
    res.send(game);
});

app.put('/games/:id', async (req, res) => {
    let game = await prisma.game.update({
        where: { id: parseInt(req.params.id) },
        data: req.body
    });
    res.send(game);
});

app.delete('/games/:id', async (req, res) => {
    await prisma.game.delete({ where: { id: parseInt(req.params.id) } });
    res.send({ message: "Game deleted" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000...");
});