const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.connect(
  "mongodb+srv://firestaters2504:zMMvZzXH8BcqFgIm@cluster0.8xoento.mongodb.net/Project0",
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);
const noteSchema = {
  fn: String,
  ln: String,
  email: String,
  age: String,
  gender: String,
  desc: String,
  contact: String,
};
const Note = mongoose.model("note", noteSchema);
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/q", function (req, res) {
  let myNote = new Note({
    fn: req.body.fn,
  ln: req.body.ln,
  email: req.body.email,
  age: req.body.age,
  gender: req.body.gender,
  desc: req.body.desc,
  contact: req.body.contact,
  });
  myNote.save();
  res.redirect("/");
});
app.listen(3000, function () {
  console.log("server is running on 3000");
});