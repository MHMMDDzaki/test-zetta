const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
  const even = number.filter((x) => x % 2 === 0);
  const odd = number.filter((x) => x % 2 !== 0);

  return [odd, even];
}
console.log(result(number));
