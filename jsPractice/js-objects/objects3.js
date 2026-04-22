const cart = {
    apple: 2,
    banana: 3
}

function addToCartFunc (cart, product, quantity) {
    if(cart[product] > 0) {
        cart[product] += quantity
    } else {
        cart[product] = quantity
    }
}

addToCartFunc(cart, 'banana', 1)
addToCartFunc(cart, 'kiwi', 2)
// console.log(cart);

let word = "apple banana apple orange banana apple"

function countWords(word) {
    let array = word.split(' ')
    let object = {}
    for(let i of array){
        if(object[i]){
            object[i] += 1
        } else {
            object[i] = 1
        }
    }
    return object
}
// console.log(countWords(word));

const users = {
    user1: { name: 'Maksym', age: 25, isOnline: true },
    user2: { name: 'Oleh', age: 30, isOnline: false },
    user3: { name: 'Anna', age: 22, isOnline: true }
}

function getAllOnlineUsers (users) {
    let onlineUsersArray = []
    for (let user in users) {
        if(users[user].isOnline === true) {
            onlineUsersArray.push(users[user]);
        }
    }
    return  onlineUsersArray
}

// console.log(getAllOnlineUsers(users));

function findUserByName (users, name) {
    let foundByNameUser = {}
    for (let user in users) {
        if(users[user].name === name) {
            foundByNameUser = users[user];
            break
        } else {
            foundByNameUser = null
        }
    }
    return foundByNameUser
}

console.log(findUserByName(users, 'Oleh'));

let userData = {
    name: 'Vasya',
    age: 11,
    isOnline: true
}
function addUser (users, id, userData) {
    users[id] = userData
    return users
}

console.log(addUser(users, 'user4', userData));