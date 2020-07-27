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

/* ============== LISTENING TO THE SERVER ============== */
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
