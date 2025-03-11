const express = require('express');
const app = express();

const fortunes = [
    'Good luck is coming!',
    'You will find happiness.',
    'A pleasant surprise awaits you.'
];
const jokes = [
    'i love bau',
    'once a guy took a roudaout as a gift', //مرة واحد لف الدوار هدية
    'There was a girl named Noor, she ate kabsa... and the lights went out'//اسمها نور اكلت كبسة طفت
];

const facts = [
    'Honey never spoils.',
    'Bananas are berries, but strawberries aren’t.',
    'A bolt of lightning contains enough energy to toast 100,000 slices of bread.'
];

app.get('/fortune', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.send(randomFortune);
});

app.get('/joke', (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.send(randomJoke);
});

app.get('/fact', (req, res) => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    res.send(randomFact);
});

app.listen(4000, () => {
    console.log('Example app listening on port 3000');
});