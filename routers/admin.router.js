const { Router } = require("express");
const {productaddpage, CategoryFormPage} = require("../controllers/admin.controller");

const router = Router();


router.get('/addproduct',productaddpage);
router.get('/CategoryForm',CategoryFormPage);

module.exports = router