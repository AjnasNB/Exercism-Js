//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (string) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = true;
  for (let i = 0; i < alphabet.length; i++) {
    if (!string.toLowerCase().includes(alphabet[i])) {
      result = false;
    }
  }
  return result;
  
};
