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

	inquirer.prompt([
 		  {
 		    type: "input",
 		    name: "managerSelection",
 		    message: "Hello Manager! Select a number of the following options: \n 1. View Products for Sale \n 2. View Low Inventory \n 3. Add to Inventory \n 4. Add New Product"
 		  }
 	]).then(function(data) {

 		if (data.managerSelection == 1) {

	 		connection.query("SELECT * from products", function (error, results) {

	 			console.log("\n");

	 			for (i = 0; i < results.length; i++) {
					console.log(results[i].id + ". " + results[i].product + ": $" + results[i].price + " Inventory: " + results[i].stock_quantity);
				};

			console.log("\n");

			});
 		}


 		if (data.managerSelection == 2) {

 	 		connection.query("SELECT * from products", function (error, results) {

 	 			console.log("\n");

 	 			console.log("Here are a list of items that have a Stock Quantity less than 5:");

	 			for (i = 0; i < results.length; i++) {
					if (results[i].stock_quantity < 5) {
						console.log(results[i].product + " Inventory: " + results[i].stock_quantity)
					}
				};

			console.log("\n");

			});

 		}

 		if (data.managerSelection == 3) {

 			connection.query("SELECT * from products", function (error, results) {
	 			console.log("\n");
	 			for (i = 0; i < results.length; i++) {
	 				console.log(results[i].id + ". " + results[i].product);
				};
			});

 			inquirer.prompt([
 		  		{
		 		    type: "input",
		 		    name: "managerAddProduct",
		 		    message: "Select the number associated with the product you would like to update?"
 		  		}, 
 		  		{
		 		    type: "input",
		 		    name: "managerAddStock",
		 		    message: "How many of this product would you like to add?"
 		  		}
 			]).then(function(response) {

 				connection.query("SELECT * from products", function (error, results) {

	 				connection.query("UPDATE products SET ? WHERE ?", [{
	 	          		stock_quantity: ((parseInt(results[response.managerAddProduct].stock_quantity)) + parseInt(response.managerAddStock))
	 	        	}, {
	 	          		id: (response.managerAddProduct)
	 	      		}], function(err, res) {
	 	          		if (err) throw err;
	 	            	console.log("PRODUCTS TABLE UPDATED");
	 	        	});
	 	        });
			});
 		}


 		if (data.managerSelection == 4) {

 			inquirer.prompt([
 		  		{
		 		    type: "input",
		 		    name: "product",
		 		    message: "Which product would you like to add?"
 		  		}, 
 		  		{
		 		    type: "input",
		 		    name: "department_id",
		 		    message: "What is the department ID you want the product to belong to?"
 		  		}, 
 		  		{
		 		    type: "input",
		 		    name: "price",
		 		    message: "What is the price of this item?"
 		  		}, 
 		  		{
		 		    type: "input",
		 		    name: "stock_quantity",
		 		    message: "How many of this product would you like to add?"
 		  		}
 			]).then(function(response) {

 				connection.query("INSERT INTO products SET ?", {
	 	      		product: response.product,
	 	      		department_id: response.department_id,
	 	      		price: response.price,
	 	      		stock_quantity: response.stock_quantity
 	    		}, function(err, res) { 
 	    			if (err) throw err;
 	    			console.log('NEW PRODUCT ADDED!')
 	    		});
			
			});

 		}

	});







