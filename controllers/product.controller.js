const CategoryModel = require("../models/category.schema");
const ProductModel = require("../models/product.schema");
const SubCategoryModel = require("../models/SubCategory.Schema");

const addProduct = async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  try {
    const data = await ProductModel.create({ ...req.body, image: req.file.path });
    console.log(data);
    return res.redirect("back");
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).send("Product not added");
  }
};

const productView = async (req, res) => {
  try {
    const products = await ProductModel.find({})
      .populate("CategoryId")
      .populate("SubCategoryId")
      .populate("ExtraCategoryId");
    const categories = await CategoryModel.find({});
    const subcategories = await SubCategoryModel.find({});
    
    res.render("products", { products, categories, subcategories });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Error fetching products");
  }
};

const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, CategoryId, SubCategoryId } = req.body;
    const updateData = { title, description, price, CategoryId, SubCategoryId };

    if (req.file) {
      updateData.image = req.file.path;
    }

    const updatedProduct = await ProductModel.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedProduct) {
      return res.status(404).send("Product not found");
    }

    res.redirect("back");
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).send("Error updating product");
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductModel.findByIdAndDelete(id);
    res.redirect("back");
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send("Unable to delete product data");
  }
};

module.exports = {
  addProduct,
  productView,
  getDataEdit,
  editProduct,
  deleteProduct,
};
