"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(__id, __name) {
        this.__id = __id;
        this.__name = __name;
    }
    Object.defineProperty(Product.prototype, "id", {
        get: function () {
            return this.__id;
        },
        set: function (pid) {
            this.__id = pid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this.__name;
        },
        set: function (pname) {
            this.__name = pname;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.displayProduct = function () {
        console.log("".concat(this.id, ":").concat(this.name));
    };
    return Product;
}());
exports.Product = Product;
var pro = new Product(1, "Puma Shoes");
pro.displayProduct();
