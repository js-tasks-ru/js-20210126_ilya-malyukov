/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let newArr = arr.slice();
  if (param === 'asc') {
    newArr.sort((a, b) => a.localeCompare(b, ['ru', 'en'], { caseFirst: 'upper' }));
    return newArr;
  } else if (param === 'desc') {
    newArr.sort((a, b) => a.localeCompare(b, ['ru', 'en'])).reverse();
     return newArr;   
  };
};