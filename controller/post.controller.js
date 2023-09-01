const PostScheme = require("../models/post.model")

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

const updatePost = async(req, res) => {
    const id = req.params.id

    try {

        const { title, description, category, postImage} = req.body






        

            const saved = await PostScheme.findOneAndUpdate({_id : id  }, {title, description, category, postImage})

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
const getUserPost = async(req, res) => { 



   try {
    const email = req.params.email
    const post = await PostScheme.find({email: email})

    res.status(201).send(post)


    
   } catch (error) {

    {
        res.status(500).send({
            message: error.message,
          });
        
    }
    
   }



}
const getPostbyCat = async(req, res) => { 



   try {
    const category = req.params.category
    const post = await PostScheme.find({category: category })

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

 const approvedPost = async(req, res) => {
    const  id = req.params.id;
    
        try {
            const user = await PostScheme.findByIdAndUpdate(
            id,
                { $set: { status: 'approved' } },
                { new: true } // Return the updated user
              );
    
              res.status(201).send(user)
          
              if (!user) {
                return res.status(404).json({ message: 'Post not found' });
              }
          
            
        } catch (error) {
            {
                res.status(500).send({
                    message: error.message,
                  });
                
            }
    
            
        }
     }
 const rejectPost = async(req, res) => {
    const  id = req.params.id;
    
        try {
            const user = await PostScheme.findByIdAndUpdate(
            id,
                { $set: { status: 'declined' } },
                { new: true } // Return the updated user
              );
    
              res.status(201).send(user)
          
              if (!user) {
                return res.status(404).json({ message: 'Post not found' });
              }
          
            
        } catch (error) {
            {
                res.status(500).send({
                    message: error.message,
                  });
                
            }
    
            
        }
     }

     const addComment = async (req, res) => {
        try {
          const postId = req.params.postId;
          const { comment, userName, userPhoto, userEmail } = req.body;
          
          const post = await PostScheme.findById(postId);
          if (!post) {
            return res.status(404).json({ message: "Post not found" });
          }
      
          const newComment = { comment, userName, userPhoto, userEmail }; // Assuming you have user authentication
          post.comments.push(newComment);
          await post.save();
      
          res.status(201).send(post);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };

      const searchPost = async (req, res) => {
        try {
            const searchText = req.params.text;
    
            if (!searchText || searchText.trim() === '') {
                // If searchText is not provided or empty, return all posts
                const allPosts = await PostScheme.find({ status : 'approved' });
                res.status(200).send(allPosts);
            } else {
                // If searchText is provided, search for posts with titles matching the searchText
                const posts = await PostScheme.find({ title: { $regex: searchText, $options: 'i' }, status : 'approved' });
                res.status(200).send(posts);
            }
        } catch (error) {
            res.status(500).send({
                message: error.message,
            });
        }
    };
    
     
module.exports = {
    savePost,
    getPost,
    getOnePost,
    deleteOnepost,
    approvedPost,
    getUserPost,
    updatePost,
    rejectPost,
    addComment,
    getPostbyCat,
    searchPost
}