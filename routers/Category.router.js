const { Router } = require("express");
const { CategoryAdd, ViewCategory, DeleteCategory } = require("../controllers/Category.controller");

const CatRouter = Router();

CatRouter.post('/CategoryAdd',CategoryAdd);
CatRouter.get('/categoryPage',ViewCategory);
CatRouter.get('/deleteCategory/:id',DeleteCategory);
module.exports = CatRouter;