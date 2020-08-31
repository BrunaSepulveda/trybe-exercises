let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalsum = 0;

for (let indice = 0; indice< numbers.length; indice +=1){
    totalsum=totalsum + numbers[indice];
}
let arithmeticAverage = (totalsum/numbers.length);

console.log(`A média aritimética do array é ${arithmeticAverage} `);
if (arithmeticAverage< 20){
    console.log(` valor maior que 20`)}
    else { console.log(`valor menor que 20`)
    };

let higherNumber = 0;

for (let indice = 0; indice< numbers.length; indice +=1){
    if (higherNumber < numbers[indice]) {
            higherNumber = numbers[indice]
    }
};

console.log(`O maior numero desse array é o  ${higherNumber} `);

let oddNumber = 0;

for (let indice = 0; indice< numbers.length; indice +=1){
    if (numbers[indice]%2 !== 0) {
            oddNumber +=1
    }
};

if(oddNumber === 0) {console.log (`nenhum número ímpar encontrado`)}
else {console.log(`Há ${oddNumber} números ímpares`)};

let smallestNumber = numbers[0];

for (let indice = 1; indice< numbers.length; indice +=1){
    if (smallestNumber > numbers[indice]) {
            smallestNumber = numbers[indice]
    }
};
console.log(`O menor numero desse array é o  ${smallestNumber} `);

let numbers25 = [];

for (let i = 1; i <= 25; i += 1) {
  numbers25.push(i);
}

console.log(numbers25);