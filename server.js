const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parcials')

app.set('view engine', 'hbs');

//helpers 


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'jean ramos'

    });
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto ' + port);
})