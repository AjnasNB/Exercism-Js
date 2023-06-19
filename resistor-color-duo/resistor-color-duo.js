//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const colorCode = arr=["black","brown","red","orange","yellow","green","blue","violet","grey","white"];


export const decodedValue = () => {
  
  return arr.indexOf(arguments[0][0])*10+arr.indexOf(arguments[0][1]);
};
