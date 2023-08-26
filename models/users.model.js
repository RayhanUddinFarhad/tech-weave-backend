const { default: mongoose } = require("mongoose");

const techweaveUsers = new mongoose.Schema({

    name : {
        type : String
    },

    photo : {
        type : String
    },

    email : {
        type : String
    },

    role : {
        type : String,
        
        default : "user"

    },

    created_at : { 

        type : Date,
        default : Date.now
        
    }
})


const UserSchema = mongoose.model('teachweaveUsers', techweaveUsers)
module.exports = UserSchema