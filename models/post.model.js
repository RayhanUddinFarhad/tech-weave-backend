const { default: mongoose } = require("mongoose");

const techWeavePost = new mongoose.Schema({

    name : {
        type : String
    },

    photo : {
        type : String
    },

    email : {
        type : String
    },

    title : {
        type : String

    },

    description : {
        type : String

    },

    postImage : {
        type : String
    },
    

    created_at : { 

        type : Date,
        default : Date.now
        
    }
})


const PostScheme = mongoose.model('posts', techWeavePost)
module.exports = PostScheme