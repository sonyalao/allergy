//const restaurantService = require('./restaurantService');
const express = require('express');
const server = express();
const port = 4000;

server.get("/test", (req, res) => {
    res.json({ message: "test" });
 });

 server.get("/json", (req, res) => {
    res.json({message: "json"});
 });

 server.get("/restaurants", (req, res) =>{
    res.json(restaurantService.getMenu());
 });

 server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});

