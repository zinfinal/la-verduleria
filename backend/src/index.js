const express = require('express');

const app = express();

dotenv.config();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cors());
app.options("*", cors());

app.get('/', (req, res)=>{
    res.send('API RESTFull');
});

const port = Number(process.env.PORT || 3331);

//const employeeRoutes = require('./src/routes/employee.route');

//app.use('/api/v1/employee', employeeRoutes);

// 404 error
app.all('*', (req, res, next) => {
    const err = new Error(404, 'Endpoint Not Found');
    next(err);
});

app.listen(port, ()=>{
    console.log(`🚀 Servidor RESTful API inició correctamente en el puerto: ${port}`);
});