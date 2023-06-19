//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const colorCode = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];


export const decodedValue = ([c1,c2]) => {
  
  return colorCode.indexOf(c1)*10+colorCode.indexOf(c2);
};
