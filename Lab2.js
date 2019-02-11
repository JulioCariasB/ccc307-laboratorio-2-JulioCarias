var express = require('express');
var server = express();
var fetch = require('fetch');
var mypackage = require('laboratorio-2-juliocarias-new')

server.get('/get_user',function (req, res) {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => res.send(json))
});

server.get('/get_user_new',function(req,res) {
    var str = mypackage.
    res.send(mypackage());
});