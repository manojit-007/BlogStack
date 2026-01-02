const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Server and page is ready");
});

app.listen(8080, () => {
    console.log("Server listening");
})