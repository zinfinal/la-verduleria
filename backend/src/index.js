const express = require('express');
const cors = require("cors");

const app = express();

require("dotenv").config();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cors());
app.options("*", cors());

app.get('/', (req, res)=>{
    res.send('API RESTFull');
});

const port = Number(process.env.PORT || 3331);

const categoriaRoutes = require('./api/routes/categorias');

app.use('/api/v1/categorias', categoriaRoutes);
app.use('/api/v1/productos', require('./api/routes/productos'));

// 404 error
/*
app.all('*', (req, res, next) => {
    const err = new Error(404, 'Endpoint Not Found');
    next(err);
});
*/
app.listen(port, ()=>{
    console.log(`Servidor RESTful API inició correctamente en el puerto: ${port}`);
});