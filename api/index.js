const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "./config/.env" });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Server and page is ready");
});

app.listen(process.env.PORT, () => {
    console.log("Server listening", process.env.PORT);
})