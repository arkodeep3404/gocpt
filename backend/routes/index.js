const express = require("express");
const userRouter = require("./user");
const mdmRouter = require("./mdm");

const router = express.Router();

router.use("/user", userRouter);
router.use("/account", mdmRouter);

module.exports = router;
