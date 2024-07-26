const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    CategoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "categoryTable"
    },
    SubCategoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategoryTbl"
    },
    ExtraCategoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ExtraCategoryTbl"
    }
})

const productModel = mongoose.model('productTBL',productSchema);
module.exports = productModel;