const express = require("express");
const apiRouter = require("./routes/api");

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.listen(3000, () => {
    console.log("app dinleniyor.");
})