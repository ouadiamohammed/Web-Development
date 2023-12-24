// Import necessary modules
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create Express app
const app = express();
const port = 3000;

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Define routes
const fetchedPosts = [
  { title: "Post 1", content: "Content 1" },
  { title: "Post 2", content: "Content 2" }
];

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/posts", (req, res) => {
  res.render("posts.ejs", { posts: fetchedPosts });
});

app.post("/posts/new", (req, res) => {
  const newPost = { title: req.body.title, content: req.body.content };
  fetchedPosts.push(newPost);
  res.redirect("/posts");
});


// Set up the view engine and partials
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.locals.partials = {
  header: "partials/header",
  footer: "partials/footer"
};
// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});