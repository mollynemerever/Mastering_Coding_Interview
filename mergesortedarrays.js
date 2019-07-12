//given two sorted arrays merge them together maintaining sort

let array1 = [0, 3, 4, 31];
let array2 = [4, 6, 30];

function mergeSorted(array1, array2) {
  let mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1; //array1 increment
  let j = 1; //array 2 increment

  if (array1.length === 0) {
    return array2;
  }

  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    //while either element exists
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

console.log(mergeSorted(array1, array2));

//O(n) linear run time
//O(1) linear space complexity bc output not any larger than the input
