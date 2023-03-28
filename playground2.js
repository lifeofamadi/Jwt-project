const express = require("express")
const mongoose = require("mongoose");

const {playcontroller} = require("./playcontroller")
const {playservice} = require("./playservice")

mongoose.connect('mongodb://127.0.0.1:27017/newDbb');

const app = express();
app.use(express.json());
app.use(express.urlencoded());

const Playcontroller = new playcontroller(new playservice())

app.route("/user")
.post(Playcontroller.adduser)



app.listen(8000, () => console.log("Listening on port 8000"))
