// votre code ici

function checkAge (age) {

    if (age < 18) {
        console.log("vous etes mineur")
    } else if (age >= 18 && age <= 65) {
        console.log("vous etes majeur")
    } else if (age > 65) {
        console.log("vous etes senior")
    } 
}

console.log(checkAge(14))
console.log(checkAge(54))
console.log(checkAge(69))


