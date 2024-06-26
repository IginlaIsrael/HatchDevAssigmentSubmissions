function mergeSort<T>(array: T[]): T[] {
    if (array.length <= 1) {
        return array;
    }
  
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge<T>(left: T[], right: T[]): T[] {
    let resultArray: T[] = [], leftIndex = 0, rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
  
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  const unsortedArray2 = [80, 46, 28, 66, -22, 11, 90];
  console.log("The Unsorted array is (Merge Sort):", unsortedArray2);
  
  const sortedArray2 = mergeSort(unsortedArray2);
  console.log("The Sorted array is (Merge Sort):", sortedArray2);