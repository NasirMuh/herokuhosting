const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Students-Data")
    .then(() => console.log("connection succesfully running...."))
    .catch((err) => console.log("wrong connection" + err));