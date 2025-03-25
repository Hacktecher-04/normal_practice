const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const core = require("./core");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
core.init();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");    
});
