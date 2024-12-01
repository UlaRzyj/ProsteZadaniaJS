class Calculator {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        let result = this.a + this.b;
        console.log(`Result of the action ${this.a} + ${this.b} = ${result}`)
    }

    substract() {
        let result = this.a - this.b;
        console.log(`Result of the action ${this.a} - ${this.b} = ${result}`)
    }

    multiply() {
        let result = this.a * this.b;
        console.log(`Result of the action ${this.a} * ${this.b} = ${result}`)
    }

    divided() {
        let result = this.a / this.b;
        console.log(`Result of the action ${this.a} / ${this.b} = ${result.toFixed(2)}`)
    }
}

const calculator = new Calculator(5, 3);

calculator.add();
calculator.substract();
calculator.multiply();
calculator.divided();