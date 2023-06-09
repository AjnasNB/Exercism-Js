// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1=[5,8,1]
 * @param {number[]} array2=[9]
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
      let n1=Number(array1.join(''))
      let n2=Number(array2.join(''))
      return n1+n2
      console.log(n1+n2)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  
  const a= String(value).split('').reverse().join('')
  if(value==Number(a)){
    return true
  }
  else return false
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if((input)==null||input==undefined||input==''){
    return "Required field"
  }
  else if(Number(input)){
    return ""
  }
  else{
    return "Must be a number besides 0"
  }
 
}
