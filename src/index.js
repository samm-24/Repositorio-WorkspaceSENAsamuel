const express = require('express');
const path = require('path');

const indexRoutes = require('./routes/index.js');

const app = express();

const PORT = 10;

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');



app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));


app.use(
    '/icons',
    express.static(
        path.join(__dirname, '../node_modules/bootstrap-icons/font')
    )
);

// Rutas
app.use(indexRoutes);

// Página no encontrada para error
app.use((req, res) => {
    res.status(404).send(`
        <h1>Página no encontrada</h1>
        <p>La página que buscas no existe.</p>
        <a href="/">Volver al inicio</a>
    `);
});

// Iniciar servidor
app.listen(PORT, () => {
    
    console.log('       Hola profesor rembrant, si estoy aparecio, ya incio el servidor');
   
    
});
