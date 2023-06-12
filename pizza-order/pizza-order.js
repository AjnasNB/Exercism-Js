/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const  pizzas={
    Margherita:7,
    Caprese:9,
    Formaggio:10

  }
   


  let total=pizzas[pizza]
  extras.forEach(extras=>{
    if(extras==='ExtraSauce'){
      total+=1
    }
    else if( extras==='ExtraToppings' ){
      total+=2
    }
    

  }

  
  )
  return total;

} 

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {

  let totals=0


  pizzaOrders.forEach((pizza)=>{
    totals+=pizzaPrice(pizza.pizza,...pizza.extras)
    
    


  })
  return totals
}
