const mongoose = require("mongoose");

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
});

const User = model("User", userSchema);

module.exports = {
  User,
};
