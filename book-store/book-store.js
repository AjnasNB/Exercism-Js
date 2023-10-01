export const cost = (books) => {
  let cost = 0;
  let bookSet = [];
  let discount = {
    1: 1,
    2: 0.95,
    3: 0.9,
    4: 0.8,
    5: 0.75,
  };

  books.forEach((book) => {
    let addedToExistingSet = false;
    for (const set of bookSet) {
      if (!set.includes(book)) {
        set.push(book);
        addedToExistingSet = true;
        break;
      }
    }
    if (!addedToExistingSet) {
      bookSet.push([book]);
    }
  });
  if(books.length>1 && books.length%8==0 ){
    bookSet.forEach((set) => {
      let set1 = bookSet[bookSet.length-1];
      if(set.length>4&&set1.length<4){
        set1.push(set.pop());
      }
      
    });
  }


  bookSet.forEach((set) => {
    cost += set.length * 800 * discount[set.length];
  });


  return cost;
};
