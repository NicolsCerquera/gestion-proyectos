const express = require('express');
const router = express.Router(); //Te devulve un objeto en el cual tu puedes ingresar rutas

const TaskR = require('../models/task')


router.get('/',  async (req, res)=> {
  const tasks = await TaskR.find();
  /* console.log(router.hasOwnProperty("get")); */
  /* console.log(tasks); */
  res.json(tasks);
  /* res.send("Hello world"); */
  //find = buscar todos los documentos que tenemos en mongo db
  /* TaskR.find(function (err,tasks) { 
    console.log(tasks)
    res.json({
      status: 'API Works!'
    });
  }) */
  //Forma de escribirlo con then
  /* TaskR.find()
    .then(data => console.log(data))
    .catch(err => console.log(err)) */
  
});

//Obtener solo una tarea
router.get('/:id', async (req,res) => {
  const task = await TaskR.findById(req.params.id);
  res.json(task);
});

//Agregar tareas
router.post('/', async (req, res) => {
  //Obtener los datos del titulo y la descripcion req.body
  const {title, description} = req.body;
  //pasar al modelo los datos
  const task = new TaskR({
    title, 
    description
  });
  //console.log(task);
  //almacenar datos en la base de datos
  await task.save();
  /* console.log(req.body); */
  res.json({status: 'task save'})
});

//Tipo de variable
/* 
const 
var
let */

/* function fun() {

}

const  = () => {

}
 */


//Actualizar tarea
router.put('/:id', async (req, res) => {
  const { title, description } = req.body;
  const newTaskR = {title, description};
  //recive el ide de la tarea la cual quiero actualizar y el otro parameto son los nuevos datos
  await TaskR.findByIdAndUpdate(req.params.id, newTaskR);
  //obtengo el id que esta envindo el cliente
  /* console.log(req.params.id); */
  res.json({status: 'Task Updated'});
});

//eliminar
router.delete('/:id', async (req, res) => {
  //metodo para  buscar una tarea y eliminarla
  await TaskR.findByIdAndRemove(req.params.id);
  res.json({status: 'Task Delete'});
});



module.exports = router;

