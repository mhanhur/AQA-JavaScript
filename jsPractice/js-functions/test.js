let array = [100, 52, 2, 54,23,7,75, 54, -1, 432]
function maxNumber(min, max) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return {
        min,
        max
    }
}
let {max, min} = maxNumber(10000, 0)
console.log(max)
console.log(min)

