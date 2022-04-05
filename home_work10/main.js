const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function chunk(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

const result = chunk(arr, 3); // 3 - размер каждого кусочка
console.log(result); // [[1,2,3], [4,5,6], [7,8,9], [10]]

const result = chunk(arr, 5); // 5 - размер каждого кусочка
console.log(result); // [[1,2,3,4,5], [6,7,8,9,10]]

const result = chunk(arr, 1); // 1 - размер каждого кусочка
console.log(result); // [1,2,3,4,5,6,7,8,9,10] - то есть исходный массив

const result = chunk(arr, 0); // 0 - размер каждого кусочка
console.log(result); // написать пользователю в консоль что он не прав