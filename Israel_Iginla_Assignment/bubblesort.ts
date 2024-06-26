function bubbleSort<T>(array: T[]): T[] {
    let n = array.length;
    let swapped: boolean;
  
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
        }
        n--;
    } while (swapped);
  
    return array;
  }
  
  const unsortedArray = [77, 44, 55, 72, -28, 11, 90];
  console.log("Unsorted array (Bubble Sort):", unsortedArray);
  
  const sortedArray = bubbleSort(unsortedArray);
  console.log("Sorted array (Bubble Sort):", sortedArray);