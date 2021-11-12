const mongoose = require('mongoose')
const titleSchema = mongoose.Schema({
    title:{
        type:"String"
    }
    ,genre:{
        type:"String"
    }
    ,story:{
        type:"String"
    }
})

module.exports = mongoose.model("Title", titleSchema);