const express = require("express");
const router = express.Router();
const path = require("path");
// const CustomError = require(path.resolve("helpers", "CustomError"));

module.exports = router
.get("/", (req, res) => {
    res.render("index")
    })
router.get("/400", (req, res) => {
    res.render("error400")
    })
.get("/401", (req, res) => {
    res.render("error401")
    })
.get("/403", (req, res) => {
    res.render("error403")
    })
.get("/500", (req, res) => {
    res.render("error500")
    })
.get("/501", (req, res) => {
    res.render("error501")
    })


