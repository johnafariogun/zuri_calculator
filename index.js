
function add(number1, number2) {
    sum =number1 + number2
    return sum
}
function multiply(number1, number2) {
    multiply =number1 * number2
    return multiply
}
function division(number1, number2) {
    division =number1 / number2
    return division
}
function substract(number1, number2) {
    substract =number1 - number2
    return substract
}
reply = prompt('command: "+", "*", "-", "/"')
let number1 = Number(prompt('first number'))
let number2 = Number(prompt('second number'))
if(reply == '+' && typeof(number1) == 'number' && typeof(number2) == 'number') {
    alert('the sum of the two numbers is ' + add(number1, number2))
} else if(reply == '-'  && typeof(number1) == 'number' && typeof(number2) == 'number') {
    alert('the substraction of the second number from the first is ' + substract(number1, number2))
} else if(reply == '/'  && typeof(number1) == 'number' && typeof(number2) == 'number') {
    alert('the division of the first number by the second number ' + division(number1, number2))
} else if(reply == '*'  && typeof(number1) == 'number' && typeof(number2) == 'number') {
    alert('the multiplication of the two numbers is ' + multiply(number1, number2))
} else{
    alert('wrong command')
}