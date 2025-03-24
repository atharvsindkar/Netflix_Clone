const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const db = require('./db.js');
const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json());

db.Database();
app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
