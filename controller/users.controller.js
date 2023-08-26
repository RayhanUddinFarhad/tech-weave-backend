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

module.exports = {
    saveUsers,
    getUsers
}