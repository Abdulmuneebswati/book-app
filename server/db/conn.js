const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://muneeb:roxen123@cluster0.fdn2wwz.mongodb.net/books-app").then(()=>console.log("Successful")).catch((err)=>console.log(err));
