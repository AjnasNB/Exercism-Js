//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  if(message.trim().length === 0) return 'Fine. Be that way!';
  
  if(message.toUpperCase() === message && message.toLowerCase() !== message && message.trim().endsWith('?')) 
  return 'Calm down, I know what I\'m doing!';
  else  if(message.toUpperCase() === message && message.toLowerCase() !== message) return 'Whoa, chill out!';
  if(message.trim().endsWith('?')) return 'Sure.';
  
  return 'Whatever.';
};
