const express = require("express")
const app = express()

app.get("/movie/:movieName", (req, res) => {
    let movie = req.params.movieName
    let data = { id: 1, title: movie, rating: 5, image: "no-image.jpg" }
    res.json(data)
})

app.get("/movie/:movieName/best", (req, res) => {
    let movie = req.params.movieName
    let data = { id: 2, title: movie + " Best", rating: 10, image: "best-image.jpg" }
    res.json(data)
})

app.listen(3000, () => {
    console.log("server work")
})