export const selectionSort = (inputArr: number[]): number[] => {
  const inputLength = inputArr.length;

  // the last element do not needs to be compared
  for(let i = 0; i < inputLength - 1; i++){
    let minNumberIndex = i;
    const curValue = inputArr[i];
    for(let j = 1 + i; j < inputLength; j++){
      if(inputArr[minNumberIndex] > inputArr[j]){
        minNumberIndex = j;
      }
    }
    inputArr[i] = inputArr[minNumberIndex];
    inputArr[minNumberIndex] = curValue;
  }
  return inputArr;
}