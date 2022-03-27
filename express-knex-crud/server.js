const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require("./db/cars");

app.get("/", (req, res) => {
    //res.status(200).json({ success: true});
    res.sendFile(__dirname + "/index.html");
});

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/cars", async (req, res) => {
    const results = await db.createCar(req.body);
    res.status(201).json({ id: results[0] });
});

app.get("/cars", async (req, res) => {
    const cars = await db.getAllCars();
    res.status(200).json({cars});
});

app.patch("/cars/:id", async (req, res) => {
    const id = await db.updateCar(req.params.id, req.body);
    res.status(200).json({ id });
});

app.delete("/cars/:id", async (req, res) => {
    await db.deleteCar(req.params.id);
    res.status(200).json({ success: true });
});

app.listen(3000, () => console.log('Server started on port 3000'));
