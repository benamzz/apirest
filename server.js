// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE = process.env.DATABASE || 'mongodb://127.0.0.1:27017/apirest';

app.use(bodyParser.json());

// Connexion à la base de données MongoDB
mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Connecté à : ${DATABASE}`);
}).catch((err) => {
    console.error('Erreur de connexion à MongoDB', err);
});

// Routes des produits
app.use('/products', productRoutes);

// Middleware de gestion des erreurs
app.use(errorMiddleware);

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
