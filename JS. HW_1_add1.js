let age_1 = 10
let age_2 = 18
let age_3 = 60

// Преобразовать написанный код в функцию, принимающую на вход возраст.
const checkAge = function(age){
if (age < age_2){
    console.log("You don't have access cause your age is less than " + age_2 + ".")
} else if (age >= age_2 & age < age_3){
    console.log("Welcome!")
} else if (age > age_3){
    console.log("Keep calm and look Culture channel.")
} else {
    console.log("Technical work")
}
}
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
checkAge(17)
checkAge(18)
checkAge(61)
  