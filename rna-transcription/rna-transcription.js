//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const a={
  'G':'C',
  'C':'G',
  'T':'A',
  'A':'U'

}
export const toRna= (e_dna) => {
 let newdna='';
  for(let i=0;i<e_dna.length;i++){
    if(a[e_dna[i]]){
      newdna+=a[e_dna[i]];
    }
  }

 

 
return newdna;
}

