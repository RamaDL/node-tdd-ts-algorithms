export const selectionSort = (inputArr: number[]): number[] => {
  const inputLength = inputArr.length;

  for(let i = 0; i < inputLength; i++){
    let minNumberIndex = i;
    const currValue = inputArr[i];
    for(let j = 1 + i; j < inputLength; j++){
      if(inputArr[minNumberIndex] > inputArr[j]){
        minNumberIndex = j;
      }
    }
    inputArr[i] = inputArr[minNumberIndex];
    inputArr[minNumberIndex] = currValue;
  }
  return inputArr;
}