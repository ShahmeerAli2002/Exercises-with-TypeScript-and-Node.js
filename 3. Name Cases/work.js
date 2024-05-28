"use strict";
let personName = "Eric";
let uppercaseName = personName.toUpperCase();
console.log("uppercase :" + uppercaseName);
let lowercaseName = personName.toLowerCase();
console.log("lowercase :" + lowercaseName);
let titlecaseName = personName.split(``).map(word => word.charAt(0).toLowerCase() + word.slice(1).toLowerCase()).join(``);
console.log("titlecase :" + titlecaseName);
