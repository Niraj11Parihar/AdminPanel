const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },  
  // SubCategoryId:{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'subcategoryTbl'
  // }
});

const CategoryModel = mongoose.model("categoryTable", categorySchema);

module.exports = CategoryModel;
