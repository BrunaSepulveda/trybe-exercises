
//segunda questão
let n = 5;
let asterisk = '';
for (let i = 0; i < n; i += 1) {
  asterisk += '*';
  console.log(asterisk)
};
//primeira questão
asterisk ='';
for (let i = 0; i < n; i += 1) {
    asterisk += '*';}

let nAsterisk = asterisk

for (let i = 0; i < n; i += 1) {
    console.log (nAsterisk);};
//terceira questão
let inputLine = '';
let inputPosition = n;
let lineIndex;
let columnIndex;
let symbol = '*';
for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};
//quarta questão essa eu não entendi!
let n = 5;
let lineIndex;
let lineColumn;
let lineInput = '';
let symbol = '*';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight= midOfMatrix;

for (lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (lineColumn = 1; lineColumn <= n; lineColumn += 1) {
    if (lineColumn > controlRight && lineColumn < controlLeft) {
      lineInput = lineInput + symbol;
    } else {
      lineInput = lineInput + ' ';
    }
  }
  console.log(lineInput);
  lineInput = '';
  controlRight -= 1;
  controlLeft += 1;
};
------------------------
for (i = 1; i <= n; i++) { //POR CADA LINHA
  var linha = ""
  for(j = 1; j <= n; j++) {
    if (j<=i){
      linha = "*" + linha
    } else {
      linha = " " + linha
    }
  }
}
--------------------------------

for(i = 1; i <= n; i += 2) { //POR CADA LINHA
  var linha = "*"
  for(j = 2; j < n; j += 2) {
    if(j >= i) {
      linha = " " + linha + " "
    } else {
      linha = "*" + linha + "*"
    }
  }
  console.log(linha)
}
---------------------------------
var n = 7;

var linha = "*";

for(i = 1; i < n; i += 2) {
  linha = " "+ linha+ " ";
}
console.log(linha)

for(i = 3; i < n; i += 2) { //POR CADA LINHA
  linha = " ";
  for(j = 3; j <= n; j += 2) {
    if(j == i) {
      linha = "*" + linha + "*"
    } else {
      linha = " " + linha + " "
    }
  }
  console.log(linha)
}

linha = "*"
for(i = 1; i <= n / 2; i += 1) {
  linha = "*"+ linha+ "*"
}
console.log(linha)