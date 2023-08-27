const UserSchema = require("../models/users.model")

const saveUsers = async(req, res) => {

    try {

        const {name, photo, email} = req.body

        const existingUser = await UserSchema.findOne({email : email})

        if (existingUser) {

            res.send ({message : "User already exists"})
        }


       else {

        const newUsers = new UserSchema ({
            name,
            photo,
            email
        })


            const saved = await newUsers.save()

            res.status(201).send (saved)
       }

        

    } catch (error) {
        res.status(500).send({
            message: error.message,
          });
        
    }

}


const getUsers = async(req, res) => { 



    try {

        const users = await UserSchema.find()
        res.status(201).send (users)
        
    } catch (error) {
        {
            res.status(500).send({
                message: error.message,
              });
            
        }
    }
}

const getOneUser = async(req, res) => { 



   try {
    const userEmail = req.params.email
    const user = await UserSchema.findOne ({email: userEmail})

    res.status(201).send(user)


    
   } catch (error) {

    {
        res.status(500).send({
            message: error.message,
          });
        
    }
    
   }



}


const changeUserRole = async(req, res) => {
const  userEmail = req.params.email;

    try {
        const user = await UserSchema.findOneAndUpdate(
            {email : userEmail},
            { $set: { role: 'admin' } },
            { new: true } // Return the updated user
          );

          res.status(201).send(user)
      
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
      
        
    } catch (error) {
        {
            res.status(500).send({
                message: error.message,
              });
            
        }

        
    }
 }

 



module.exports = {
    saveUsers,
    getUsers,
    getOneUser,
    changeUserRole,
}