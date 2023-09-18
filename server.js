const express = require("express");
const cors = require("cors");

const app = express();

var corOption = {
  origin: "http://localhost:8081",
};

// middleware

app.use(cors(corOption));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routers

const router = require("./routes/lemburRouter.js");
app.use("/api/lemburs", router);

// testing api

app.get("/", (req, res) => {
  res.json({
    message: "hello from api",
  });
});

// port

const PORT = process.env.PORT || 8080;

// server

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} `);
});
