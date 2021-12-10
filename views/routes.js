const express = require("express");
const router = express.Router();
const title = require("../schema/title_schema");

router.get("/", async (req, res) => {
    res.redirect("/dashboard");
});

router.get("/dashboard", async (req, res) => {
    const doc = await title.findOne({});
    let count = await title.find().countDocuments();
    
    let random = Math.floor(Math.random()* count) 
    if (random <= 15) {
      const findrandom = await title.find().skip(random).exec()
      const randomStory = await findrandom.slice(0,5)
      
  res.render("dashboard", {doc, randomStory});
    } else{
      random=15
      const findrandom = await title.find().skip(random).exec()
      const randomStory = await findrandom.slice(0,5)
      
  res.render("dashboard", {doc, randomStory});
    }
   
});

router.get("/story", async (req, res) => {
    const doc = await title.find({});
  res.render("story", {doc});
});

router.get("/story/:title", async (req, res) => {
    const doc = await title.findOne({title:req.params.title});
  res.render("view_story", {doc});
});

router.post("/search", async(req,res) => {
  try {
    let searchStory = req.body.searchStory;
    const doc = await title.find({title: { $regex: searchStory, $options: 'i' }}).sort({ title: 'asc', test: -1 })
    res.render("search", {doc});
   
  }catch(error) {
    console.log(error)
  }
})

// router.get("/random", async(req,res) => {
//   try {
//     let count = await title.find().countDocuments();
//    let random = Math.floor(Math.random()* count) 
//    let randomStory = await title.find().limit(5).skip(random).exec()
   
// res.render("dashboard",{randomStory})
    
//   }catch(error) {
//     console.log(error)
//   }
// })

router.get("/about", async (req, res) => {
    res.render("about");
});

router.get("/audio", async (req, res) => {
    res.render("audio");
});

router.get("/pageone", async (req, res) => {
    res.render("pageone");
});




// router.get('/', recipeController.story)
// router.get('/title', recipeController.exploretitle)
// router.get('/title/:id', recipeController.exploretitleById)
// router.post('/search', recipeController.story)

module.exports = router;
