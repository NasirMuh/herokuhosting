const express = require("express");
require("./db/connection")
const studentRoute = require("./routers/userRouter")

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(studentRoute);

app.listen(port, () => {
    console.log(`connection is setup at ${port}`)
})
