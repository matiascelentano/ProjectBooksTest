//Require middleware
const express = require('express');
const app = express();
const session = require('express-session');
const cookie = require('cookie-parser');
const path = require('path');
const method = require('method-override')

//Configuracion del Servidor 
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=> console.log('Server running http://localhost:'+ app.get('port')));

//Configuracion de los middlewares
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({extended:false}))
app.use(method("_method"))
app.use(cookie())

//Seteando View Engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));


//Rutas
////Home
    const mainRouter = require('./routes/mainRoutes');
    app.use('/', mainRouter);
