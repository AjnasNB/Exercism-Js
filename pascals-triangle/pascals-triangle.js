//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (rowNumber) => {
  let triangle=[]
  for (let i=0; i<rowNumber; i++){
    triangle[i] = []
    triangle[i][0] = triangle[i][i] = 1  
    for (let j=1; j<i; j++){
      triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]
    }
    
  }
  return triangle
  
};
