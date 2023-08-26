const express = require('express')
const app = express()
const Port = process.env.PORT || 5000

const cors = require('cors');
const connectDB = require('./config/db');
const router = require('./routes/users.route');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)


app.listen (Port, async() => {

    console.log (`listening on ${Port}`)
    await connectDB()
})
