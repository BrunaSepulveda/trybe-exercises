
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
//quarta questão
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