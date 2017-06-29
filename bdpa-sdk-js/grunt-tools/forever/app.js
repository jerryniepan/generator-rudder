var express = require('express');
var server = require('./server/index');
var path = require('path');

var dirPath = path.resolve(__dirname, '../..');
console.log('dirpath:', dirPath);
var config = {
    express: express,
    port: 9001,
    dirPath: dirPath
}

server(config);