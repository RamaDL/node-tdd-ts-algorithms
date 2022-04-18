import { selectionSort } from './selection-sort';

describe("selection-sort", () => {

  test("selectionSort should exist", () => {
    selectionSort([1]);
  })

  const input = [7, 3, 5, 1, 6, 2, 8, 4];
  const output = [1, 2, 3, 4, 5, 6, 7, 8]

  test(`selectionSort for input ${input} should output ${output}`, () => {
    expect(selectionSort(input)).toStrictEqual(output);
    ;
  })
})