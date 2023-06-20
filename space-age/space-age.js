//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const earthage=(e_age)=>{ 
  return (e_age/31557600);

}
export const age = (planet,seconds) => {
  switch(planet){
    case 'mercury':
      return parseFloat((earthage(seconds)/0.2408467).toFixed(2));
    case 'venus':
      return parseFloat((earthage(seconds)/0.61519726).toFixed(2));
    case 'mars':
      return parseFloat((earthage(seconds)/1.8808158).toFixed(2));
    case 'jupiter':
      return parseFloat((earthage(seconds)/11.862615).toFixed(2));
    case 'saturn':
      return parseFloat((earthage(seconds)/29.447498).toFixed(2));
    case 'uranus':
      return parseFloat((earthage(seconds)/84.016846).toFixed(2));
    case 'neptune':
      return parseFloat((earthage(seconds)/164.79132).toFixed(2));
    default:
      return parseFloat(earthage(seconds).toFixed(2));
  }
  
};
