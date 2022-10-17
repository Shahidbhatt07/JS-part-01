// splice method
// it is used to deleted or insert or both together in an array
// start   delete  insert

//for delete       0         1       2        3          4
const myArray = ["item1", "item2", "item3", "item4", "item5"];
 //index start= deleted from index  ,   no.of items to delete
const deletedItems = myArray.splice(2, 2);
console.log(myArray); //[ 'item1', 'item2', 'item5' ]
console.log(deletedItems); //[ 'item3', 'item4' ]

// for insert
// start   delete  insert
//                  0       1          2       3       4
const myArray2 = ["item1", "item2", "item3", "item4", "item5"];
//  index star= insert from index, delete= 0 ,  then write those elements which are to be inserted   
 myArray2.splice(1, 0, "insertedItem1", "insertedItem2");
console.log(myArray2); //   [
                       //     'item1',
                       //     'insertedItem1',
                       //     'insertedItem2',
                       //     'item2',
                       //     'item3',
                       //     'item4',
                       //     'item5'
                       //   ]

//delete and insert simultaneously
const myArray3 = ["item1", "item2", "item3", "item4", "item5"];
const myDeletedItems = myArray3.splice(1, 1, "item1inserted", "item2inserted");
console.log(myDeletedItems); //[ 'item2' ]
console.log(myArray3); // [
                       // 'item1',
                       // 'item1inserted',
                        // 'item2inserted',
                        // 'item3',
                        // 'item4',
                        // 'item5'
                        //   ]
