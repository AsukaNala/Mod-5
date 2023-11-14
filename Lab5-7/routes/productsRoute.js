const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController");

router.get("/", (req, res) => {
  productController.allProducts(req, res);
});

module.exports = router;
