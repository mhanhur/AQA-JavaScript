// task to sum the array
let arr = [3, 7, 2, 9, 5];

function sumArr() {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum +=  arr[i]
    }
    console.log(sum)
}

sumArr(arr)
// task to return second biggest number
let arr2 = [10, 4, 7, 22, 15, 22, 3];

function secondNum (arr) {
    let max = 0
    let secondBiggestNum = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < max && arr[i] > secondBiggestNum) {
            secondBiggestNum = arr[i]
        }
    }
    console.log(secondBiggestNum)
}
secondNum(arr2)
// task to return second biggest number option 2
function secondNumber(arr) {
    let newArray = arr.sort((a, b) => a - b);
    return newArray[arr.length - 3];
}
console.log(secondNumber(arr2))

// find duplicates
let users = [102, 203, 101, 405, 203, 500, 107, 104, 500, 400];

function findDuplicates(users) {
    return users.filter((el, index) => users.indexOf(el) !== index);
}

console.log(findDuplicates(users))

//
let tests = [
    "passed",
    "failed",
    "passed",
    "skipped",
    "failed",
    "passed"
];

function statisticFunc (array) {
    let newObject =  {
        passed: 0,
        failed: 0,
        skipped: 0
    };
    for(let i of array) {
        if(i === "passed") {
            newObject.passed += 1
        }
        if(i === "failed") {
            newObject.failed += 1
        }
        if(i === "skipped") {
            newObject.skipped += 1
        }
    }
    return newObject;
}

console.log(statisticFunc(tests));

let bugs = [
    { id: 1, severity: "critical" },
    { id: 2, severity: "minor" },
    { id: 3, severity: "critical" },
    { id: 4, severity: "major" },
    { id: 5, severity: "minor" }
];

function bugSeverityFunc(bugs) {
    let newObject = {
        critical: [],
        major: [],
        minor: []
    };

    for (let bug of bugs) {
        if (bug.severity === "critical") {
            newObject.critical.push(bug.id);
        } else if (bug.severity === "major") {
            newObject.major.push(bug.id);
        } else if (bug.severity === "minor") {
            newObject.minor.push(bug.id);
        }
    }

    return newObject;
}

console.log(bugSeverityFunc(bugs));