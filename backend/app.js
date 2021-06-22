const express = require("express");
const mongoose = require("mongoose");
const app = express();
const jsonParser = express.json();

const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter.js");

const dotenv = require("dotenv");
dotenv.config({path: "./config/config.env"});
const port = process.env.PORT;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.get("/api/users", userRouter);
app.get("/api/users/:id", userRouter);
app.post("/api/users",jsonParser, userRouter);
app.delete("/api/users/:id", userRouter);
app.put("/api/users",jsonParser, userRouter);

app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});



mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }, function(err){
    if(err) return console.log(err);
    app.listen(port, function(){
        console.log(`Server run on port ${port}. http://localhost:${port}`);
    });
});
