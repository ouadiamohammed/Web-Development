import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello Word testing the nodemon<h1>");
});
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});