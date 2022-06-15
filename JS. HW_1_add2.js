let age_1 = 10
let age_2 = 18
let age_3 = 60

// Преобразовать задание, чтобы первым делом в функции проверялся тип данных. 
// И если он не Number - кидалась ошибка.
const checkAge = function(age){
    if (typeof age == "number") {
       
if (age < age_2){
    console.log("You don't have access cause your age is less than " + age_2 + ".")
} else if (age >= age_2 & age < age_3){
    console.log("Welcome!")
} else if (age > age_3){
    console.log("Keep calm and look Culture channel.")
} else {
    console.log("Technical work")
}
} else {console.log("Not integer value")}
}

checkAge(17)
checkAge("string")
checkAge(61)