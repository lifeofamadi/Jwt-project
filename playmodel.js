const mongoose = require("mongoose")

const playschema = mongoose.Schema({
    phone :{
    type : String,
    require : true,
    unique : true
    },
    password:{
        type:String,
        required:true
    }
})

const Play = mongoose.model("Play", playschema)

module.exports = {Play}