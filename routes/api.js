const express = require('express');
const router = express.Router();
const title = require("../schema/title_schema");

router.get("/title", async(req, res) =>{
    const doc = await title.find({})
    res.json(doc)
});

// router.post("/search", async(req, res) => {
//     // console.log(req.query.title);
//     // const doc = await title.find({title: { $regex: req.query.title, $options: 'i' }}).sort({ title: 'asc', test: -1 })
//     // res.json(doc)
//     // try {
//     //     let searchStory = req.body.searchStory;
//     //     let story = await title.find({ $text: { $search: searchStory, $diacriticSensitive: true}});
//     //     res.json(story)
//     // }catch (error) {
//     //    console.log(error)
//     // }
//     res.render('search', {title: 'Search'})
// })

module.exports = router
