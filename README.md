# API RESTful pour la gestion des produits

## Description

Cette application est une API RESTful construite en utilisant Node.js avec Express et MongoDB. L'objectif principal de cette API est de permettre la gestion complète des produits. Les opérations CRUD (Create, Read, Update, Delete) permettent aux utilisateurs de créer, récupérer, mettre à jour et supprimer des produits dans une base de données MongoDB.

## Fonctionnalités

- **Création de produit** : Les utilisateurs peuvent créer de nouveaux produits en fournissant les détails tels que le nom, la description, le prix, etc.
- **Récupération de produit** : Les utilisateurs peuvent récupérer la liste complète des produits ou un produit spécifique en fonction de son identifiant unique.
- **Mise à jour de produit** : Les utilisateurs peuvent mettre à jour les détails d'un produit existant tels que le nom, la description, le prix, etc.
- **Suppression de produit** : Les utilisateurs peuvent supprimer un produit existant de la base de données en fonction de son identifiant unique.

## Technologies utilisées

- **Node.js** : Plateforme JavaScript côté serveur.
- **Express** : Framework web pour Node.js, utilisé pour créer l'API RESTful.
- **MongoDB** : Base de données NoSQL utilisée pour stocker les informations sur les produits.
- **Mongoose** : Outil de modélisation d'objet MongoDB pour Node.js, utilisé pour interagir avec la base de données MongoDB.

6. L'API sera disponible à l'adresse `http://localhost:3000`.

## Exemples d'utilisation

### Création de produit

```http
POST /products
Content-Type: application/json

{
    "name": "Nom du produit",
    "description": "Description du produit",
    "price": 10.99
}

Réponse attendue en cas de succès :
HTTP/1.1 201 Created
Content-Type: application/json

{
    "id": "ID_du_produit_généré",
    "name": "Nom du produit",
    "description": "Description du produit",
    "price": 10.99
}



Réponse HTTP en cas d'erreur :
- 400 Bad Request : Le corps de la requête est mal formé.
- 422 Unprocessable Entity : Les données du produit sont invalides.
- 500 Internal Server Error : Une erreur est survenue lors de la création du produit.
```

### Récupération de tous les produits

```http
GET /products

Réponse attendue en cas de succès :
HTTP/1.1 200 OK
Content-Type: application/json

[
    {
        "id": "ID_du_premier_produit",
        "name": "Nom du premier produit",
        "description": "Description du premier produit",
        "price": 19.99
    },
    {
        "id": "ID_du_deuxième_produit",
        "name": "Nom du deuxième produit",
        "description": "Description du deuxième produit",
        "price": 29.99
    },
    ...
]

Erreurs possibles :
- HTTP/1.1 500 Internal Server Error en cas d'erreur interne du serveur.
```

### Récupération d'un produit spécifique

```http
GET /products/:id

Réponse attendue en cas de succès :
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "ID_du_produit",
    "name": "Nom du produit",
    "description": "Description du produit",
    "price": 10.99
}

Erreurs possibles :
- HTTP/1.1 404 Not Found si le produit avec l'ID spécifié n'est pas trouvé.
- HTTP/1.1 500 Internal Server Error en cas d'erreur interne du serveur.
```

### Mise à jour d'un produit

```http
PUT /products/:id
Content-Type: application/json

{
    "name": "Nouveau nom du produit",
    "description": "Nouvelle description du produit",
    "price": 15.99
}

Réponse attendue en cas de succès :
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "ID_du_produit",
    "name": "Nouveau nom du produit",
    "description": "Nouvelle description du produit",
    "price": 15.99
}

Erreurs possibles :
- HTTP/1.1 400 Bad Request : Le corps de la requête est mal formé.
- HTTP/1.1 422 Unprocessable Entity : Les données du produit sont invalides.
- HTTP/1.1 404 Not Found si le produit avec l'ID spécifié n'est pas trouvé.
- HTTP/1.1 500 Internal Server Error en cas d'erreur interne du serveur.
```

### Suppression d'un produit

```http
DELETE /products/:id

Réponse attendue :
HTTP/1.1 204 No Content

Erreurs possibles :
- HTTP/1.1 404 Not Found si le produit avec l'ID spécifié n'est pas trouvé.
- HTTP/1.1 500 Internal Server Error en cas d'erreur interne du serveur.
```
