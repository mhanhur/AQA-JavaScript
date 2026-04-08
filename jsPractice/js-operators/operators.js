// Task 1
function canCalculationFunc(lengthMeters, widthMeters, heightMeters) {
    let sqr = 2 * (lengthMeters + widthMeters) * heightMeters
    let can = 4*4
    console.log(Math.round(sqr / can))
}
canCalculationFunc(5,7,2.5)

// Task 2
function luckyTicketFunc (luckyTicket, firstPartOfTicket, secondPartOfTicket, digits) {
    digits = luckyTicket.toString().split('').map(Number)
    firstPartOfTicket = digits.slice(0,3).reduce((a, b) => a + b, 0)
    secondPartOfTicket = digits.slice(3,6).reduce((a, b) => a + b, 0)
    console.log(firstPartOfTicket === secondPartOfTicket)
}
luckyTicketFunc(385916)

