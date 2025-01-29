// The first solution
const operations = {
    multiply: (a,b)=> a * b,
    sum: (a,b)=> a + b,
    divide: (a,b)=> a / b,
    subtract: (a,b)=> a - b,
};

const calculate = function (num1,num2,selected){
    return selected(num1,num2)
};

const selectedOperation = "sum";
console.log(calculate(6, 3, operations[selectedOperation]));

// the second solution
const operations1 = {
    multiply:'multiply',
    sum:'sum',
    divide:'divide',
    subtract:'subtract',
};

const calculate1 = function (num1,num2,selected){
    this.multiply = num1 * num2,
    this.sum = num1 + num2,
    this.divide = num1 / num2,
    this.subtract = num1 - num2;
    return this[selected]
};

const selectedOperation1 = "divide";
console.log(calculate1(6, 3, operations1[selectedOperation1]));

// the extended solution
const operations2 = {
    multiply: (a,b)=> a * b,
    sum: (a,b)=> a + b,
    divide: (a,b)=> a / b,
    subtract: (a,b)=> a - b,
};

const calculate2 = function (selected,...args){
     return args.reduce((a,b) => selected(a,b))
};

const selectedOperation2 = "sum";
console.log(calculate2(operations2[selectedOperation2],231,54,56,84,54,21));