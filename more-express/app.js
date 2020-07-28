/* ================= IMPORT PACKAGES ================= */
const express = require("express");
const app = express();
const port = 3000;

/* ================= ROUTES ================= */
// roor route
app.get("/", (req, res) => {
  res.render("home.ejs");
});
//
app.get("/fallinlovewith/:thing", (req, res) => {
  const thing = req.params.thing;
  res.render("love.ejs", { thing: thing });
});
//
app.get("/posts", (req, res) => {
  const posts = [
    { title: "Post 1", author: "Adi" },
    { title: "Post 2", author: "Bujos" },
    { title: "Post 3", author: "Nabila" },
  ];
  res.render("posts.ejs", { posts: posts });
});

/* ================= LISTENING TO THE SERVER ================= */
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
