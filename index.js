// const express = require("express");
// // const sequelize = require("./config/db"); // Your Sequelize instance
// // const userRoutes = require("./routes/userRoutes");
// const mysql = require("mysql2");

// const app = express();
// app.use(express.json());
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "nishshanka",
//   database: "shop_user",
// });

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// app.get("/user", (req, res) => {
//   const q = "SELECT * FROM user_table";
//   db.query(q, (err, result) => {
//     if (err) return res.json(err);
//     return res.json(result);
//   });
// });

// app.post("/user", (req, res) => {
//   const q =
//     "insert into user_table (ID,user_name,email,telephone,date) values (?)";
//   const values = [
//     req.body.ID,
//     req.body.user_name,
//     req.body.email,
//     req.body.telephone,
//     req.body.date,
//   ];

//   db.query(q, [values], (err, result) => {
//     if (err) return res.json(err);
//     return res.json("successfully saved");
//   });
// });

// app.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.use("/user", userRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
