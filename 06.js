      //Spread operator in Objects
     const obj1 = {
        key1 : "value1",
        key2 : "value2",
      };
     const obj2 = {
        key3 : "value3",
        key4 : "value4",
      }
        const newObject = {...obj1, ...obj2};
      console.log(newObject);
      
      const newObj = {...obj1, ...obj2, key5 : "value5"} 
      console.log(newObj);
      
//.......................................................//
      const obj3 = {
        key1 : "value1",
        key2 : "value2",
      };
     const obj4 = {
        key3 : "value3",
        key4 : "value4",
        key2 : "vlaue5"
      }
      const obj5 = {...obj3, ...obj4};
      console.log(obj5);