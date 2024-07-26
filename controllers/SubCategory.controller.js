const SubCategoryModel = require("../models/SubCategory.Schema");

const AddSubCategroy = async(req,res) => {
   try {
           let data = await SubCategoryModel.create(req.body);
           res.redirect('back');
   } catch (error) {
            console.log(error)
            res.send("unable to create SubCategory")
   }
}

const SubCategroyPage = async(req,res) => {
    try {
        let catData = await SubCategoryModel.find({});
        res.render('SubCategoryPage',{catData});
    } catch (error) {
        console.log(error);
    }
}

const DeletSubCategory = async(req,res) => {
    try {
       await SubCategoryModel.findByIdAndDelete(req.params.id);
        res.redirect('back');
    } catch (error) {
        console.log(error);
        res.send("Unable to delte subcategorydata")
    }
}


module.exports = {SubCategroyPage, AddSubCategroy, DeletSubCategory}