const CategoryModel = require("../models/category.schema");
const ExtraCategoryModel = require("../models/ExtraCategory.Schema");
const SubCategoryModel = require("../models/SubCategory.Schema");
const userModel = require("../models/user.schema");

  const index = async(req,res) => {
      try {
          res.render('index');
      } catch (error) {
          console.log(error);
      }
  }

const productaddpage = async (req, res) => {
  try {
    let cat = await CategoryModel.find({});
    let subcat = await SubCategoryModel.find({});
    let extracat = await ExtraCategoryModel.find({});
    res.render("./pages/addproduct", { cat, subcat, extracat },{messages : req.flash('productadded')});
  } catch (error) {
    console.log(error);
  }
};

const CategoryFormPage = async (req, res) => {
  try {
    res.render("./pages/CategoryForm");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  productaddpage,
  CategoryFormPage,
  index
};
