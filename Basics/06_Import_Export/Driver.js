"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var product_1 = require("./product");
var myCus = new customer_1.Customer("Rajat Kapoor", 52);
myCus.showDetails();
var myPro = new product_1.Product(1, "Oil");
myPro.displayProduct();
