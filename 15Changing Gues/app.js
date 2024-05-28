var guestList = ['Taha', "Anas", "Shahroz ", "Ali"];
var dontCome = guestList[0];
console.log(dontCome, "He is not come");
guestList.splice(0, 1, "Zain");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner"));
});
