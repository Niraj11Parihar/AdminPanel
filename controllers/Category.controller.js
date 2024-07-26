const CategoryModel = require("../models/category.schema")

const CategoryAdd = async (req,res)=>{

    try {
        let data = await CategoryModel.create(req.body);
        console.log(data);
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }
   
}

const ViewCategory = async (req,res) =>{
    try {
        let catData = await CategoryModel.find({});
        res.render('categoryPage',{catData});
    } catch (error) {
        console.log(error);
    }
}

const DeleteCategory = async (req,res) =>{
    try {
        await CategoryModel.findByIdAndDelete(req.params.id);
        res.redirect('back');
    }catch(error){
        console.log(error);
        res.send("unable to delete Category");
    }
}


module.exports = {CategoryAdd, ViewCategory, DeleteCategory}