const number = parseInt(prompt("Zadej číslo"));
const getFactorial = (n) => {
  if (n === 0) return 1;
  return n * getFactorial(n - 1);
};

result = getFactorial(5);
console.log(result);
