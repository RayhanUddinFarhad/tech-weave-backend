const PostScheme = require("../models/post.model")
const UserSchema = require("../models/users.model")

const savePost = async(req, res) => {

    try {

        const {name, photo, email, title, description, category, postImage} = req.body






        const newPost = new PostScheme ({
            name,
            photo,
            email,
            title,
            description,
            category,
            postImage
        })


            const saved = await newPost.save()

            res.status(201).send (saved)

        

    } catch (error) {
        res.status(500).send({
            message: error.message,
          });
        
    }

}


const getPost = async(req, res) => { 



    try {

        const post = await PostScheme.find()
        res.status(201).send (post)
        
    } catch (error) {
        {
            res.status(500).send({
                message: error.message,
              });
            
        }
    }
}

const getOnePost = async(req, res) => { 



   try {
    const id = req.params.id
    const post = await PostScheme.findOne ({_id: id})

    res.status(201).send(post)


    
   } catch (error) {

    {
        res.status(500).send({
            message: error.message,
          });
        
    }
    
   }



}


const deleteOnepost = async(req, res) => {

    const id = req.params.id


    try {

        const user = await PostScheme.deleteOne({_id : id})

        res.status(201).send(user)

        
    } catch (error) {
        {
            res.status(500).send({
                message: error.message,
              });
            
        }
    }
 }

module.exports = {
    savePost,
    getPost,
    getOnePost,
    deleteOnepost
}