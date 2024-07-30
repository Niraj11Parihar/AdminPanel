const { Router } = require("express");
const {productaddpage, CategoryFormPage, index} = require("../controllers/admin.controller");

const router = Router();

router.get('/index',index);
router.get('/addproduct',productaddpage);
router.get('/CategoryForm',CategoryFormPage);

module.exports = router