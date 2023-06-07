export function frontDoorResponse(poemLine){
  return poemLine[0];

}

export function frontDoorPassword(poemWord){
  
  poemWord=poemWord.toLowerCase();
   
   return poemWord[0].toUpperCase()+poemWord.slice(1);
  }

  export function backDoorResponse(poemLine){
   poemLine=poemLine.trim();
    return poemLine[poemLine.length-1];
  
  }

  export function backDoorPassword(poemWord){

    return frontDoorPassword(poemWord)+", please";
  }