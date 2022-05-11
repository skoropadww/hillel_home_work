function findVowels(array) {
  const vowels = [];

  return array.filter((number) => {
    if (!vowels.includes(number)) {
      vowels.push(number);
    }
  })

}

// console.log(unique([1, 1, 2, 3, 2, 4, 2, 7, 1])); // => [1, 2, 4, 3, 7]
console.log(unique2([1, 1, 2, 3, 4, 2, 7, 1])); // => [1, 2, 4, 3, 7]
