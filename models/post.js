// dealing with blog database

const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    category : {
        type : String,
        required: true
    },
    title : {
        type: String,
        required: true
    },
    body : {
        type: String,
        required: true
    },

}, {
    timestamps: true
})


// console.log(PostSchema)

module.exports = mongoose.model('Posts', PostSchema);