const mongoose = require('mongoose');

const ExtraCategorySchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
        unique:true
    }
})

const ExtraCategoryModel = mongoose.model("ExtraCategoryTbl",ExtraCategorySchema);

module.exports  = ExtraCategoryModel