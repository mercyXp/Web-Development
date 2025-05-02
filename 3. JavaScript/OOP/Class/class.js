class Products{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Product: ${this.price}`);
    }
}
const product1 = new Products("Shirt", 19.99);
product1.displayProduct();

var x ='5', y='10';
console.log(+x+y);