export function needsLicense(vehicle){
        if(vehicle==="car"||vehicle==="truck"){
            return true;
        }
        else 
        {return false;}
}
export function chooseVehicle(vehicle1,vehicle2){
      return  vehicle1<vehicle2? vehicle1+" is clearly the better choice.":  vehicle2+" is clearly the better choice.";
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