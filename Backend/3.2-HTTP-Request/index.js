import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello Word testing the nodemon<h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>ABOUT Me</h1><p>hello i am simo and i am learning about http request / express.js and node.js</p>")
});

app.get("/contact", (req, res) => {
    res.send("<p>Phone number: 01254896336666</p>");
})

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});