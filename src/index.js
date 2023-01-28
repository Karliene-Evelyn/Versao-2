const express = require("express");
const app = express();
const path = require("path");
const form = require("./routes/form.js");
const cors = require("cors");

app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //pasta - localizacao
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", form);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log(`
        PORT: http://localhost:3000
    `);
});
