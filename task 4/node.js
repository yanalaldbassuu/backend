const { urlencoded, json } = require("body-parser");
const express = require("express");
const app = express();

app.use(urlencoded({ extended: true }));
// app.use(json());
let missions = [
    {
        id: "1",
        missionName: "Able 1",
        astronaut: ["khattab", "Joseph M. Acaba", "Loren Acton"],
        progress: 34,
    },
    {
        id: "2",
        missionName: "Apollo1",
        astronaut: ["khattab", "Ali AlQarni", "Yuri Artyukhin"],
        progress: 100,
    },
    {
        id: "3",
        missionName: "AirSTAR",
        astronaut: ["khattab", "Jeffrey Ashby", "Terrence"],
        progress: 90,
    },
];

// create new mission
app.post("/mission", (req, res) => {
    const data = req.body;
    data.astronaut = JSON.parse(data.astronaut);
    missions.push(data);
    res.send("create mission");
});

// get all the missions
app.get("/missions", (req, res) => {
    res.send(missions);
});

// get specific mission
app.get("/mission/:id", (req, res) => {
    const paramsId = req.params.id;
    for (let i = 0; i < missions.length; i++) {
        if (missions[i].id === paramsId) {
            res.send(missions[i]);
        }
    }
    res.send("mission is not found")
});

//edit on mission
app.put("/mission", (req, res) => {
    const data = req.body;
    data.astronaut = JSON.parse(data.astronaut);

    console.log(data);

    for (let i = 0; i < missions.length; i++) {
        if (missions[i].id === data.id) {
            //update the data
            missions[i] = data;
            res.send("update the mission");
        }
    }
    res.send("mission is not found");
});

//delete mission
app.delete("/mission/:id", (req, res) => {
    const paramsId = req.params.id;
    for (let i = 0; i < missions.length; i++) {
        if (missions[i].id === paramsId) {
            missions.splice(i, 1);
            res.send("mission is deleted");
        }
    }
    res.send("mission is not found");
});

const port = 3000;
app.listen(port, () => {
    console.log("the server running on port " + port);
});