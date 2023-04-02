const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/books-store").then(()=>console.log("Successful")).catch((err)=>console.log(err));
