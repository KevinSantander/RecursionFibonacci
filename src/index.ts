function calculoFibonacci(num: number): number {
  let resultado: number = 0;
  if (num > 1) {
    resultado = calculoFibonacci(num - 1) + calculoFibonacci(num - 2);
  } else {
    resultado = num;
  }
  return resultado;
}
console.log(calculoFibonacci(3));
