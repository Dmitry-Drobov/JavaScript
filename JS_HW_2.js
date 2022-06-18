// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

count = 2
for (let i = 1; i < 11; i++){
    console.log(count ** i)
}

// 1*. Преобразовать 1 задачу в функцию, 
// принимающую на вход степень, в которую будет возводиться число 2

const checkDegree = function(Degree){
Degree = Number(Degree)
count = 2
console.log(count ** Degree)
}
checkDegree(8)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, 
// чтобы в первой строчке выводилось :), во второй :):) и так далее

let str = ""
let smile = ":)"
for (var i = 0; i < 5; i++) {
  str += smile
  console.log(str)
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, 
// которая и будет выводиться в консоль (как в условии смайлик), 
// а также количество строк для вывода e.g. function printSmile(string, numberOfStrings)

function printSmile(stroka, numberOfStrings){
    stroka = String(stroka)

x = numberOfStrings
for (numberOfStrings = 0; numberOfStrings < x; numberOfStrings++) {

  console.log(stroka)
}
}
printSmile("hello!!!", 3)
printSmile(2345235, 3)

// 3**.  Написать функцию, которая принимает на вход слово. 
// Задача функции посчитать и вывести в консоль, сколько в слове гласных, 
// и сколько согласных букв. e.g. function getWordStructure(word)
// В консоли: Слово (word) состоит из  (число) гласных и (число) согласных букв
function getWordStructure(word) {
    let vowel_list = 'aeiouAEIOU'
    let vcount = 0
    let cons_list = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz"
    let conscount = 0

    for(var x = 0; x < word.length ; x++) {
      if (vowel_list.indexOf(word[x]) !== -1) {
        vcount += 1
      }
        }
    for(var y = 0; y < word.length; y++){
        if (cons_list.indexOf(word[y]) !== -1) {
            conscount += 1
        }
    }
    console.log("Word consists: " + vcount + " vowels, " + conscount + " consonants.")
    // return vcount;
      }
  getWordStructure("case")
  getWordStructure("Case")
  getWordStructure("Check-list")

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word). Проверки: 'abba', 'Abba'

function palindrome(word) {

let result = cleanStr(word).toLowerCase()
    // console.log(result)
    // console.log(reverseStr(result))
    if (result == reverseStr(result)){
        console.log("Palindrom")
    } else {
        console.log("NOT palindrom")
    }
    return result === reverseStr(result)
}
function reverseStr(word) {
    return word.split('').reverse().join('')
}
function cleanStr(word){
let result = word.replace(/\s+/g,'').replace(/\_+/g,'').match(/\w/g).join('')
    return result
}
    palindrome("abba")
    palindrome("Abba")
    palindrome("bigger")
    // palindrome("шалаш")