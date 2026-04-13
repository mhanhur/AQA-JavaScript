let ticketCost = 25
function tickets(array) {
    let clerksCash = 0
    for(let i = 0; i < array.length; i++ ) {
        if(array[i] === 25){
            clerksCash += ticketCost
        }
        if(array[i] === 50 || array[i] === 100){
            clerksCash += ticketCost - array[i]
        }
    }
    if(clerksCash > 0) {
        console.log(`Clerk is able to give a change because he has ${clerksCash}`)
    }
    if(clerksCash < 0) {
        console.log(`Clerk is NOT able to give a change because he has ${clerksCash}`)
    }
}
tickets([25,25,50])
tickets([25, 100])
tickets([25, 25, 50, 50, 100])

let result = 1
function findPartMaxProd(inputNum){
    if(inputNum === 2 || inputNum === 3) {
        return (inputNum - 1)
    }
    while (inputNum > 4){
        inputNum -= 3
        result *= 3
    }
    return (inputNum * result)
}
console.log("Max product is: " + findPartMaxProd(8))