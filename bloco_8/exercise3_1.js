const arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];


function flatten() {
return arrays.reduce(function (acc, item) {
  item.forEach((element) => {
    return acc.push(element);
  });

  return acc;
}, []);
};
assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);

