const { Router } = require("express");
const { SubCategroyPage, AddSubCategroy, DeletSubCategory } = require("../controllers/SubCategory.controller");

const Sub_router = Router();

Sub_router.get("/SubCategoryPage",SubCategroyPage)
Sub_router.post("/SubCategoryAdd",AddSubCategroy)
Sub_router.get('/deleteSubCategory/:id',DeletSubCategory)


module.exports = Sub_router;