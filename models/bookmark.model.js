const { default: mongoose } = require("mongoose");

const bookmark = new mongoose.Schema({


    id : {
        type : String
    },
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

    category : {
        type : String

    },
    

    created_at : { 

        type : Date,
        default : Date.now
        
    }
})


const PostBookmark = mongoose.model('bookmark', bookmark)
module.exports = PostBookmark