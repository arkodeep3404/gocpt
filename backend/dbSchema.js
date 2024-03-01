const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect(
  "mongodb+srv://arkodeep3404:L89PPgc5fBWg8YjQ@gocpt.aujxdka.mongodb.net/"
);

const schema = mongoose.Schema;
const model = mongoose.model;

const userSchema = new schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
    default: "",
  },
});

const User = model("User", userSchema);

module.exports = {
  User,
};
