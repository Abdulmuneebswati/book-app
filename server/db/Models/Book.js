const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
    book:{
        type:String,
        required:true,
    },
    authorName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    }

})

 const  Book = new mongoose.model("books",BookSchema);
 module.exports = Book