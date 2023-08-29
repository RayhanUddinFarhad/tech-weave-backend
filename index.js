const express = require('express')
const app = express()
const Port = process.env.PORT || 5000

const cors = require('cors');
const connectDB = require('./config/db');
const postRoute = require('./routes/post.route.js');
const userRoute = require('./routes/users.route.js');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use (postRoute)
app.use(userRoute)


app.listen (Port, async() => {

    console.log (`listening on ${Port}`)
    await connectDB()
})


app.get ('/', (req, res) => {

    res.send ("welcome to techweave!")
 })
