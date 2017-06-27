var express = require('express');
var inquirer = require('inquirer');

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bamazon_db',
  port : '8889'
});
 
connection.connect();

