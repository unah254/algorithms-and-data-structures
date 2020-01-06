// This is basically how long an algorithm takes to run

// size of the input is measured by n hence order of size of the input is meaured by (O(n)) or 
//oredr of the square of size of input (O(n²))

function printFirstItem(items) {
    console.log(items[0]);
  }

//This function runs in O(1) or constant time time relative to its time. Input array would be 1 0r many items
// but still would require one step


function printAllItems(items) {
    items.forEach(item => {
      console.log(item);
    });
  }

// this other function above runs in linear time or 0(n) where n is the number of items in the array
// if items are 10 it will be printed 10 times

function printAllPossibleOrderedPairs(items) {
    items.forEach(firstItem => {
      items.forEach(secondItem => {
        console.log(firstItem, secondItem);
      });
    });
  }

// in this above function, we are nesting two loops. When the outer loop runs n times, the inner 
// loop runs also n times thus  outer iterating twice therefore n² 
// this means the function runs in quadratic time or O(n²)