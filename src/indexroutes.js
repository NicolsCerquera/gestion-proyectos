const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database')

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewears
//funciones que se ejecutan antes que lleguen a las rutas
app.use(morgan('dev'));
//Comprueba si el dato es un formato json
app.use(express.json()); //le da una propiedad nueva al objeto request (req) = body


//routes
app.use('/api/tasks' , require('./routes/task.routes'));


//Static fiels
//En donde van los archivos staticos
//busca en donde esta alojada la carpeta public con el archivo index.html
app.use(express.static(path.join(__dirname,'public')));
/* console.log(__dirname + '\public') */
/* console.log(path.join(__dirname,'public')); */



//starting the server
/* app.listen(3000, ()=> {
  console.log('server on port 3000');
});
 */
app.listen(app.get('port'), ()=> {
  console.log(`server on port ${app.get('port')}`);
});