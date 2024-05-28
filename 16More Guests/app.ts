let guestList: string[] = ['Taha', "Anas" , "Shahroz ", "Ali"]

  let dontcome = guestList[0]
   
  console.log (dontcome, "He will not come")

  guestList.splice(0, 1, "Zain");
 
  console.log("Good news ! we have found a bigger table for dinner");

  guestList.unshift("Taha");

  guestList.push("babar")
 
  let middle : number= Math.floor(guestList.length / 2)

  guestList.splice(middle,0,"Amir");
   
console.log('updated list of our guest')
 guestList.forEach(element =>{console.log(`HI ${element},would you like to dinner with me?`)});



