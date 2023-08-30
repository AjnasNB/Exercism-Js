//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  let cost=0;
  let bookSet=[];
  let discount={
    1:1,
    2:0.95,
    3:0.9,
    4:0.8,
    5:0.75
  }

  books.forEach(book => {
    let addedToExistingSet = false;
    for (const set of bookSet) {
      if (!set.includes(book) ) {
        set.push(book);
        addedToExistingSet = true;
        break;
      }
    }
    if (!addedToExistingSet ) {
      bookSet.push([book]);
    }
  }
  );
  
  

  bookSet.forEach(set => {
    cost+=set.length*800*discount[set.length];
  });
return cost;

}