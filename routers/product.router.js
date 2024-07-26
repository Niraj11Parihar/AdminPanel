const { Router } = require("express");
const {
  productView,
  deleteProduct,
  editProduct,
  addProduct,
} = require("../controllers/product.controller");
const multer = require("multer");

// Multer configuration for file uploads
const fileUpload = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Adding timestamp to avoid duplicate names
  },
});
const uploads = multer({ storage: fileUpload }).single("image");

const P_router = Router();

P_router.post("/addProduct", uploads, addProduct);
P_router.get("/products", productView);
P_router.post("/updateProduct/:id", uploads, editProduct);
P_router.get("/deleteProduct/:id", deleteProduct);

module.exports = P_router;
