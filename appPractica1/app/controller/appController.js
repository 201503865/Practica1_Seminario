'use strict';

var Task = require('../model/appModel.js');

exports.list_all_tasks = function(req, res) {
  Task.getAllTask(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};

exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);


  
  Task.createTask(new_task, function(err, task) {
    

  });
};
