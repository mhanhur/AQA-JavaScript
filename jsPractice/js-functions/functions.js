function performanceCalc (number) {
    let participants = []
    let score = []
    let maxNumber = 0
    for(let i = 0; i < number; i++) {
        score.push(Math.floor(Math.random() * 100) + 1)
    }
    for(let i = 0; i < number; i++) {
        if(score[i] > maxNumber) {
            maxNumber = score[i]
        }
    }
    let j = 0
    for(let i = 0; i < number; i++) {
        j++
        participants.push(`Participant ${j} has score ${score[i]}`);
    }
    return {
        participants,
        maxNumber
    }
}
let { maxNumber, participants } = performanceCalc(10)
console.log(maxNumber)
console.log(participants)

// Weather calc task 2
let c = "Celcius"
let k = 'Kelvin'
let f = 'Fahrenheit'
function weatherCalc (number, fromUnit, toUnit) {
    if (fromUnit === c && toUnit === f) {
        number = number * 1.8 + 32;
        return Math.round(number);
    }
    if (fromUnit === f && toUnit === c) {
        number = (number - 32) / 1.8;
        return Math.round(number);
    }
    if (fromUnit === k && toUnit === c) {
        number = (number - 273.15)
        return Math.round(number);
    }
    if (fromUnit === c && toUnit === k) {
        number = (number + 273.15)
        return Math.round(number);
    }
    if (fromUnit === k && toUnit === f) {
        number = (number * 1.8) - 459.67
        return Math.round(number);
    }
    if (fromUnit === f && toUnit === k) {
        number = (number + 459.67) / 1.8
        return Math.round(number);
    }
    else {
       return 'Enter correct data'
    }
}
// console.log(weatherCalc(100, c, c))