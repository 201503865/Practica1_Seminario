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

var AWS = require('aws-sdk');
var uuid = require('uuid');

exports.subir_imagen = function(req, res){
  var bucketName = '0b081c82-7f46-4869-92ab-e7243fad5d64';
  var keyName = 'hola1.txt';
  var bucketPromise = new AWS.S3({
      apiVersion: '2006-03-01'
 }).createBucket({
    Bucket: bucketName
  }).promise();


bucketPromise.then(
	        function (data) {
            // Create params for putObject call
            var objectParams = {
                Bucket: bucketName,
                Key: keyName,
                Body: 'contenido del archivo',
                ACL: 'public-read'
            };
            // Create object upload promise
            var uploadPromise = new AWS.S3({
                apiVersion: '2006-03-01'
            }).putObject(objectParams).promise();
            uploadPromise.then(
                function (data) {
                    console.log("Successfully uploaded data to " + bucketName +$
                });
        }).catch(
        function (err) {
            console.error(err, err.stack);
        });
          res.send(bucketName + "/" + keyName);
}

exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);


  Task.createTask(new_task, function(err, task) {

    if (err)
      res.send(err);
    res.json(task);
  });

};



