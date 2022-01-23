const express = require('express');
const Client = require('../models/Client')


const router = express.Router();

// Recupère les clients
router.get('/', (req, res) => {
    Client.find()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err.message});
        console.log('Failed')
    });
})

// Ajoute un client
router.post('/', (req, res) => {
    const client = new Client({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
    });

    client.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err.message});
        console.log('Failed')
    });
    
})
module.exports = router;