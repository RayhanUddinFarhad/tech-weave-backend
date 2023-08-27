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

    category : {
        type : String

    },
    status : {
        type : String,
        default : "pending"
    },
    comments: [
        {
          text: String,
          

        },

        
      ],
      reactions: [
        {
          user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          type: Number, // Can be "like", "love", "wow", etc.
        },
      ],


    created_at : { 

        type : Date,
        default : Date.now
        
    }
})


const PostScheme = mongoose.model('posts', techWeavePost)
module.exports = PostScheme