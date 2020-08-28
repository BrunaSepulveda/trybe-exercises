let custoProduto = 10;
let valorDeVenda;
let impostoSobreCusto = 0.2;
let lucroPercent = 0.5;
let valorCustoTotal= (custoProduto *(2*impostoSobreCusto));
let lucroDeUmProduto =(valorCustoTotal*(2 *lucroPercent));
console.log(lucroDeUmProduto);
valorDeVenda = lucroDeUmProduto + valorCustoTotal;
console.log(valorDeVenda);
lucroDeUmProduto = valorDeVenda - valorCustoTotal;
console.log(lucroDeUmProduto);

