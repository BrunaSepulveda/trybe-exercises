let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalsum = 0;
for (let indice = 0; indice< numbers.length; indice +=1){
    totalsum=totalsum + numbers[indice];
}
let arithmeticAverage = (totalsum/numbers.length);
console.log(`A média aritimética do array é ${arithmeticAverage} `);