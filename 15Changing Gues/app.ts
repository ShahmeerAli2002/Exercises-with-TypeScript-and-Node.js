let guestList: string[] = ['Taha', "Anas" , "Shahroz ", "Ali"]
 
let dontCome = guestList[0];
console.log(dontCome, "He is not come")

guestList.splice(0, 1, "Zain");

guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner`)
})
