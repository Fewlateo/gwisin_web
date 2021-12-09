const express = require('express');
const router = express.Router();
const title = require("../schema/title_schema");

router.get("/title", async(req, res) =>{
    const doc = await title.find({})
    res.json(doc)
});

router.get("/search", async(req, res) => {
    console.log(req.query.title);
    const doc = await title.find({title: { $regex: req.query.title, $options: 'i' }}).sort({ title: 'asc', test: -1 })
    res.json(doc)
})


module.exports = router
