/* ============== IMPORT PACKAGES ============== */
const express = require("express");
const app = express();

/* ============== ROUTES ============== */
// root route
app.get("/", (req, res) => {
  res.send("Hi There!");
});
// bye route
app.get("/bye", (req, res) => {
  res.send("Goodbye!");
});
// route param
app.get("/r/:subName", (req, res) => {
  console.log(req.params);
  res.send(`Welcome to ${req.params.subName}`);
});
//
app.get("/r/:subName/comments/:id/:title", (req, res) => {
  console.log(req.params);
  res.send(
    `Welcome to the ${req.params.subName} ${req.params.id} ${req.params.title}`
  );
});
// match undefined route
app.get("*", (req, res) => {
  res.send("Another route!");
});

/* ============== LISTENING TO THE SERVER ============== */
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
