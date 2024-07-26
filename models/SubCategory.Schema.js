const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  // ExtraCategoryId:{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'ExtraCategoryTbl'
  // }
});

const SubCategoryModel = mongoose.model("subcategoryTbl", subcategorySchema);

module.exports = SubCategoryModel;
