// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
     switch (name) {
        case 'Pure Strawberry Joy': return 0.5;
        case 'Energizer': return 1.5;
        case 'Green Garden': return 1.5;
        case 'Tropical Island': return 3;
        case 'All or Nothing': return 5;
        default: return 2.5;  ;
     }

}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
 let total=0;
  let i=0,j=0;
  while (total<wedgesNeeded){
   switch (limes[i]) {
        case 'small': total+=6;
        j++; 
        break;
        case 'medium': total+=8;
        j++; break;
        case 'large': total+=10; 
        j++
        break;
        default: total+=6;
   }
    i++;
  }

  return j;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  
  let time=0;
  let i=0;
  while (time<timeLeft){
    time+=timeToMixJuice(orders[i]);
    i++;
  }
  return orders.slice(i);
}
