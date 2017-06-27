
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



// Showing user all the products available for sale
connection.query("SELECT * from products", function (error, results) {
  	if (error) throw error;
  	console.log("\nHere is a list of all the products available for sale:\n");

	for (i = 0; i < results.length; i++) {
		console.log(results[i].id + ". " + results[i].product + ": $" + results[i].price);
	};

	console.log("\n");

 	buyProd(results);

 });

 function buyProd(results){
 		inquirer.prompt([
 		  {
 		    type: "input",
 		    name: "purchaseProductId",
 		    message: "Input the number assocaited with product you want to by?"
 		  },
 		  {
 		    type: "input",
 		    name: "purchaseQuantity",
 		    message: "How many of this product you want to purchase?"
 		  },
 		]).then(function(data) {

 			var index = data.purchaseProductId - 1;
 			var product = results[index];
 			var quantity = data.purchaseQuantity;

 			if (product.stock_quantity <= 0) {
 				console.log("This product is out of stock!");
 			}

 			if (quantity > product.stock_quantity) {
 				console.log("Insufficient quantity!");
 			}

 			if (quantity <= product.stock_quantity) {
 				console.log("Your purchse total is: $" + (quantity*product.price));

 				var newQuant = product.stock_quantity - quantity;

        // updates table to show new quantity
 				connection.query("UPDATE products SET ? WHERE ?", [{
 	          stock_quantity: (product.stock_quantity - quantity)
 	        }, {
 	          id: product.id
 	      }], function(err, res) {
 	          if (err) throw err;
 	            console.log("PRODUCTS TABLE UPDATED");
 	        });

        // inserts into sales table
 	      connection.query("INSERT INTO sales SET ?", {
 	      		product_id: data.purchaseProductId,
 	      		quantity_purchased: quantity,
 	      		// created_at: NOW()
 	    	}, function(err, res) { 
 	    		  if (err) throw err;
 	    			console.log('SALES TABLE UPDATED!')
 	    	});
 			}


 		});
 	}




