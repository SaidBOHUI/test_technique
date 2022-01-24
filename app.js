const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors")
require('dotenv/config')

const app = express();
app.use(cors());

const uri = process.env.DB_CONNEXION;

// Lancement du serveur
const PORT = process.env.PORT || 6000

//Parse les données reçues dans le body en json
app.use(bodyParser.json());

//Importation des routes
const clientsRoute = require('./routes/client');

app.use('/client', clientsRoute);


//Routes
app.get('/', (req, res) => {
    res.send('Bing Bing');
})

// Lancement du serveur une fois la connection à la base de données établie
mongoose.connect(uri, {useNewUrlParser: true})
    .then(() => {
      app.listen(process.env.PORT);
      console.log(`server on port ${PORT}`)
    })
    .catch(err => {
        console.log("Failed to connect to mongoose can't start server")
    });