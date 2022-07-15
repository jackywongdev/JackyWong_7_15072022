const express = require("express");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");
require("dotenv").config({ path: "./config/.env" });
require("./config/db.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

//server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
