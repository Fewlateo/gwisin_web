const express = require("express");
const router = express.Router();
const title = require("../schema/title_schema");

router.get("/", async (req, res) => {
    res.redirect("/dashboard");
});

router.get("/dashboard", async (req, res) => {
    const doc = await title.findOne({});
  res.render("dashboard", {doc});
});

router.get("/story", async (req, res) => {
    const doc = await title.find({});
  res.render("story", {doc});
});

router.get("/story/:title", async (req, res) => {
    const doc = await title.findOne({title:req.params.title});
  res.render("view_story", {doc});
});


router.get("/about", async (req, res) => {
    res.render("about");
});

router.get("/audio", async (req, res) => {
    res.render("audio");
});

router.get("/pageone", async (req, res) => {
    res.render("pageone");
});

module.exports = router;
