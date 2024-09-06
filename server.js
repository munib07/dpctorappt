const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

app.get("/api", (req, res) => {
  // Send a response to the client
  res.send("Hello, DocApp!");
});

//middlewares
app.use(bodyParser.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

//port
const port = process.env.PORT || 1137;
//listen port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});