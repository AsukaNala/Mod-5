const axios = require("axios");

const allProducts = async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error" });
  }
};

module.exports = { allProducts };
