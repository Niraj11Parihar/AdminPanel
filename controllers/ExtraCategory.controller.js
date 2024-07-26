const ExtraCategoryModel = require("../models/ExtraCategory.Schema");

const AddExtraCategory = async(req,res) => {
    try {
            let data = await ExtraCategoryModel.create(req.body);
            res.redirect('back');
    } catch (error) {
             console.log(error)
             res.send("unable to create SubCategory")
    }
 }

const ExtraCategroyPage = async(req,res) => {
    try {
        let catData = await ExtraCategoryModel.find({});
        res.render('ExtraCategoryPage',{catData});
    } catch (error) {
        console.log(error);
    }
}

const DeletExtraCategory = async(req,res) => {
    try {
       await ExtraCategoryModel.findByIdAndDelete(req.params.id);
        res.redirect('back');
    } catch (error) {
        console.log(error);
        res.send("Unable to delte subcategorydata")
    }
}

module.exports = {AddExtraCategory, DeletExtraCategory, ExtraCategroyPage}