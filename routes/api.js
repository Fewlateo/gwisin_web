const express = require('express');
const router = express.Router();
const title = require("../schema/title_schema");

router.get("/title", async(req, res) =>{
    const doc = await title.find({})
    res.json(doc)
});

module.exports = router
