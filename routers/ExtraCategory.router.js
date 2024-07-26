const { Router } = require("express");
const { ExtraCategroyPage, AddExtraCategory, DeletExtraCategory } = require("../controllers/ExtraCategory.controller");

const Extra_router = Router();

Extra_router.get('/ExtraCategoryPage',ExtraCategroyPage);
Extra_router.post('/ExtraCategoryAdd',AddExtraCategory);
Extra_router.get('/deleteExtraCategory/:id',DeletExtraCategory);

module.exports = Extra_router