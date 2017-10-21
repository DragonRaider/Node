const express = require("express");
const hbs = require("hbs");
const port = process.env.PORT || 5396;

var app = express();
var index = require("./routes/index.js");
var temp = require("./routes/temp.js");

app.set("view engine","hbs");

app.use(express.static(__dirname+"/public"));

app.use("/",index);
app.use("/temp",temp);

app.listen(port);
