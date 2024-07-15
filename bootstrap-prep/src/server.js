const express = require("express");
const path = require("path");
const app = express();

// Middleware untuk melayani file statis dari direktori 'public'
app.use(express.static(path.join(__dirname, "public")));

// Rute untuk /bootstrap-prep/
app.get("/bootstrap-prep/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Mulai server
const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
