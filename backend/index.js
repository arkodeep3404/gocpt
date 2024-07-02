require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.use((err, req, res, next) => {
  res.status(500).json({
    message: "something went wrong",
  });
});

app.listen(process.env.PORT || 3000);

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njg0M2U0OWQyN2U2NGQzOGU4ZDFmZjYiLCJpYXQiOjE3MTk5NDI5MDZ9.JhnJ51G5PZShb12Zb6dUN4ov3DNmeQQ0e3SfqpxfA0o
