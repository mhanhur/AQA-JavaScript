// Task 1
let lMeters = 5;
let wWidth= 7;
let hHeight = 2.5;
let sqr = 2 * (lMeters + wWidth) * hHeight;
let can = 4*4;

console.log(Math.round(sqr / can));

// Task 2
let luckyTicket = 385916
let digits = luckyTicket.toString().split('').map(Number)
let firstPartOfTicket = digits.slice(0,3).reduce((a, b) => a + b, 0)
let secondPartOfTicket = digits.slice(3,6).reduce((a, b) => a + b, 0)

console.log(firstPartOfTicket === secondPartOfTicket)