// controllers/productController.js

const Product = require('../models/product');

// Créer un produit
exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Récupérer tous les produits
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Récupérer un produit par son ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({ message: "Produit introuvable" });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Mettre à jour un produit
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({ message: "Produit introuvable" });
        }
        if (req.body.name != null) {
            product.name = req.body.name;
        }
        if (req.body.description != null) {
            product.description = req.body.description;
        }
        if (req.body.price != null) {
            product.price = req.body.price;
        }
        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Supprimer un produit
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({ message: "Produit introuvable" });
        }
        await product.remove();
        res.json({ message: "Produit supprimé" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
