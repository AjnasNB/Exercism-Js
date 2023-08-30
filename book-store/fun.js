function arrangeBottles(bottles) {
    const sets = [];

    bottles.forEach(bottle => {
        let addedToExistingSet = false;

        // Try to add the bottle to an existing set
        for (const set of sets) {
            if (!set.includes(bottle)) {
                set.push(bottle);
                addedToExistingSet = true;
                break;
            }
        }

        // If the bottle couldn't be added to an existing set, create a new set
        if (!addedToExistingSet) {
            sets.push([bottle]);
        }
    });
    sets.forEach(set => {
        if(set.length===5){
            sets.some(set2 => {
                if(set2.length==3){
                    set2.push(set.pop())
                    
                }
            })
        }
    });

    return sets;
}

const bottles = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1];
const arrangedSets = arrangeBottles(bottles);
console.log("Arranged sets of bottles:", arrangedSets);
