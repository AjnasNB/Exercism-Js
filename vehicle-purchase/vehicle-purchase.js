export function needsLicense(vehicle){
        
            return vehicle==="car"||vehicle==="truck"
        
        
}
export function chooseVehicle(vehicle1,vehicle2){
        if(vehicle1<vehicle2)
         {return vehicle1+" is clearly the better choice."} 
        else
         return vehicle2+" is clearly the better choice.";
}
export function calculateResellPrice(price,age){
  if(age<3){
    return price*0.8;
  }
  else if(age<=10){
    return price*0.7 }
  else{
    return price*0.5;
  }
}