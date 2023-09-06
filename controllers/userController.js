const db = require("../config/db");

const userController = {
  getAllUsers: (req, res) => {
    const q = "SELECT * FROM user_table";
    db.query(q, (err, result) => {
      if (err) return res.json(err);
      return res.json(result);
    });
  },
  getUserById: (req, res) => {
    const q = "SELECT * FROM user_table WHERE ID = ?";
    const values = req.params.id;

    db.query(q, [values], (err, result) => {
      if (err) return res.json(err);
      return res.json(result);
    });
  },

  createUser: (req, res) => {
    const q =
      "INSERT INTO user_table (ID,user_name,email,telephone,date) VALUES (?)";
    const values = [
      req.body.ID,
      req.body.user_name,
      req.body.email,
      req.body.telephone,
      req.body.date,
    ];

    db.query(q, [values], (err, result) => {
      if (err) return res.json(err);
      return res.json("successfully saved");
    });
  },

  deleteUser: (req, res) => {
    const q = "DELETE FROM user_table WHERE ID = ?";
    const values = req.params.id;

    db.query(q, [values], (err, result) => {
      if (err) return res.json(err);
      return res.json("successfully deleted");
    });
  },

  updateUser: (req, res) => {
    const updatedUser = req.body;
    const q =
      "UPDATE user_table SET user_name = ?, email = ?, telephone = ?, date = ? WHERE ID = ?";
    const values = [
      updatedUser.user_name,
      updatedUser.email,
      updatedUser.telephone,
      updatedUser.date,
      req.params.id,
    ];

    db.query(q, values, (err, result) => {
      if (err) return res.json(err);
      return res.json("successfully updated");
    });
  },
};

module.exports = userController;
