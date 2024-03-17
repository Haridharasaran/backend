const mongoose = require("mongoose");
const productSchema = new  mongoose.Schema({
    Id:{
        type: String,
        // required: true
    },
    Name:{
        type: String,
        required: true
    },
    Price:{
        type: Number,
        // required: true
    },
    Description:{
        type: String,
        required: true
    }, 
    Image:{
        type: String,
        // required: true
        // default: ""
    }
})
const product = mongoose.model("product", productSchema);
module.exports = product;