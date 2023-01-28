const { conn } = require("../database/db.js");

const addForm = (req, res) => {
  const q = "INSERT INTO form(`name`, `email`, `questions`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.question];

  conn.query(q, [values], (err) => {
    if (err) {
      return res.json(err);
    } else {
      res.redirect("/");
    }
  });
};

module.exports = { addForm };
