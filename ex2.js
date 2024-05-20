/*
1. Create a class Product with properties name (string),
 price (number), and methods:
- getDetails(): Returns a string representation of the 
product details (name and price).

applyDiscount(discount): Applies a discount (percentage)
 to the product's price and returns the discounted price.
*/

class Product {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    getDetails(){
        return `The product name is ${this.name} and the price is ${this.price}`;
    }

    applyDiscount(discount){
        return this.price - (this.price * discount/100)
    }
}