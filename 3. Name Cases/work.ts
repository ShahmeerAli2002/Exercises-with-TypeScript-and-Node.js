let personName : string  = "Eric"

let uppercaseName :string = personName.toUpperCase()
 
console.log("uppercase :" + uppercaseName )

let lowercaseName :string  = personName.toLowerCase()
console.log("lowercase :" +lowercaseName)

let titlecaseName :string = personName.split(``).map(word =>word.charAt(0).toLowerCase()+ word.slice(1).toLowerCase()).join(``);
 
console.log("titlecase :" +titlecaseName)