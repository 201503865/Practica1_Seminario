'user strict';
var sql = require('./db.js');

//Task object constructor
var Task = function(task){
    this.nombre = task.nombre;
    this.ruta = task.ruta;
    this.compania = task.compania;
    this.fecha = new Date();
};
Task.createTask = function createUser(newTask, result) {    
        sql.query("INSERT INTO videojuego set ?", newTask, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};


Task.getAllTask = function getAllTask(result) {
        sql.query("Select * from tasks", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('tasks : ', res);  

                 result(null, res);
                }
            });   
};

module.exports= Task;