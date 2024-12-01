class Calculator {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        console.log(`Result of the action ${this.a} + ${this.b} = ${this.a+this.b}`)
    }

    substract(a, b) {
        console.log(`Result of the action ${this.a} - ${this.b} = ${this.a-this.b}`)
    }

    multiply() {
        console.log(`Result of the action ${this.a} * ${this.b} = ${this.a*this.b}`)
    }

    divided() {
        console.log(`Result of the action ${this.a} / ${this.b} = ${(this.a/this.b).toFixed(2)}`)
    }
}

const calculator = new Calculator(5, 3);

calculator.add();
calculator.substract();
calculator.multiply();
calculator.divided();