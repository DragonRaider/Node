const express = require("express");
var router = express.Router();

router.get("/",(req,res,next)=>{
    res.render("temp");
})


module.exports = router;