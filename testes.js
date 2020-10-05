const assert = require('assert');

const myRemove = (array, number) => {
    let cloneArray = array.slice();
      for (let index = 0; index < cloneArray.length; index +=1) {
       if (cloneArray[index] === number) {
           cloneArray.splice(index, 1);
       }
    }
    return cloneArray;
};

myRemove([1,2,3,4],3)

assert.deepEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 4 ]);
assert.notDeepEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 3, 4 ]);

const testArray = [2,3,4,7]

assert.notDeepEqual(myRemove(testArray, 3), testArray);
assert.deepEqual(myRemove([1, 2, 3, 4], 5), [ 1, 2, 3, 4 ]);

const myRemoveWithoutCopy = (array, number) => {
    for (let index = 0; index < array.length; index +=1) {
        if (array[index] === number) {
            array.splice(index, 1);
        }
    }
    return array;
};
assert.notDeepEqual(myRemoveWithoutCopy(testArray, 3), testArray, "o array foi alterado");

  