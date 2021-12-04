const mongoose = require('mongoose')
const titleSchema = mongoose.Schema({
    title:{
        type:"String",
        unique:true
    }
    ,genre:{
        type:"String"
    }
    ,story:{
        type:"String"
    },
    photoUrl:{
        type:"String"
    },
    photoStory:{
        type:"String"
    }
})

module.exports = mongoose.model("Title", titleSchema);