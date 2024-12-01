class Cart {
    constructor() {
        this.productsList =[];
    }

    addProduct(product) {
        this.productsList.push(product);
    }

    removeProduct(productName) {
        let i = 0;
         for(i; i < this.productsList.length; i++) {
            const {name, ...rest} = this.productsList[i];
            if(name === productName) {
                break;
            }
        }
        delete this.productsList[i];
    }

    showCart() {
        this.productsList.forEach(product => console.log(product));
    }
}

class Product{
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

const p = new Product('apple', 2, 3);
const r = new Product('banana', 1, 5);
const o = new Product('orange', 3, 2);

const cart = new Cart();
cart.addProduct(p);
cart.addProduct(r);
cart.addProduct(o);
cart.removeProduct('banana');
cart.showCart();