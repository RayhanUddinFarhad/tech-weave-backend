const PostBookmark = require("../models/bookmark.model")

const bookmark = async(req, res) => {

    try {




        const {name, photo, id, email, title, description, category, postImage} = req.body

        const existingBookmark = await PostBookmark.findOne({id : id})

        if (existingBookmark) {

            res.send ({message : "Item already exists"})
        }





       else {
        const newPost = new PostBookmark ({
            id,
            email,
            title,
            description,
            category,
            postImage
        })


            const saved = await newPost.save()

            res.status(201).send (saved)
       }

        

    } catch (error) {
        res.status(500).send({
            message: error.message,
          });
        
    }

}
const getUserBookmark = async(req, res) => { 



    try {
     const email = req.params.email
     const post = await PostBookmark.find({email: email})
 
     res.status(201).send(post)
 
 
     
    } catch (error) {
 
     {
         res.status(500).send({
             message: error.message,
           });
         
     }
     
    }
 
 
 
 }



module.exports = {
    bookmark,
    getUserBookmark
}