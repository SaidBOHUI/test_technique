const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')

const app = express();
const uri = process.env.DB_CONNEXION;

//Parse les données reçues dans le body en json
app.use(bodyParser.json());

//Importation des routes
const clientsRoute = require('./routes/client');

app.use('/client', clientsRoute);


//Routes
app.get('/', (req, res) => {
    res.send('WE ARE HEEERRE');
})

// Lancement du serveur une fois la connection à la base de données est établie
mongoose.connect(uri, {useNewUrlParser: true})
    .then(() => {
      app.listen(3000);
      console.log('conntected')
    })
    .catch(err => {
        console.log("Failed to connect to  mongoose can't start server")
    });