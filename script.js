let userName = prompt("Введите имя:")
let userLetter = prompt("Введите любую букву:")
let letterUpper = (userLetter.toUpperCase())
let letterLower = (userLetter.toLowerCase())

if (userName.includes(userLetter)) {
    alert(`В имени ${userName} есть буква ${userLetter}`)
} else if (userName.includes(letterUpper)) {
    alert(`В имени ${userName} есть буква ${userLetter}`)
} else if (userName.includes(letterLower)) {
    alert(`В имени ${userName} есть буква ${userLetter}`)
} else {
    alert(`В имени ${userName} нет буквы ${userLetter}`)
}