function mergeSortedArrays(left, right) {
  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // If there are remaining elements in either of the input arrays, add them to the merged array
  while (leftIndex < left.length) {
    mergedArray.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    mergedArray.push(right[rightIndex]);
    rightIndex++;
  }

  return mergedArray;
}

export const mergeSort = (array, animantions = []) => {
  if (array.length <= 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);

  // recursice calls

  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  return mergeSortedArrays(left, right);
};
