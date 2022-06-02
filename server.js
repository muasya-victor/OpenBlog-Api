const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

//db imports
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

//middle ware
app.use(cors())
app.use(bodyParser.json())

//db connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log('connected')
})


//import routes
// const BlogRoutes = require('./routes/BlogPost')
// app.use('/posts', BlogRoutes)

const PostRoutes = require('./routes/BlogPost')
app.use('/posts', PostRoutes)









app.listen(3000, ()=>{
    console.log('app running on port 3000')
})