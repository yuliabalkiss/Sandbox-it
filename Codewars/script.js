// Training JS #10: loop statement--for

function pickIt(arr) {
    var odd = [], even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } if (arr[i] % 2 === 1) {
            odd.push(arr[i])
        }
    }
    return [odd, even];

}


// Training JS #11: loop statement --break,continue

function grabDoll(dolls) {
    var bag = [];
    for (let i = 0; i < dolls.length; i++) {
        if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll')
            bag.push(dolls[i]);
        else continue;
        if (bag.length === 3) break;
    }
    return bag;
}


// Training JS #6: Basic data types--Boolean and conditional statements if..else

function trueOrFalse(val) {
    if (val == false || val == null)
        return 'false';
    else return 'true';
}


// Training JS #5: Basic data types--Object

const obj = {
    name: 'dog',
    legs: 4,
    color: 'white'
};

function animal(obj) {
    return 'This ' + obj.color + ' ' + obj.name + " has " + obj.legs + ' legs.';
}


// Training JS #4: Basic data types--Array

function getLength(arr) {
    //return length of arr

    return arr.length;
}
function getFirst(arr) {
    //return the first element of arr
    return arr[0];
}
function getLast(arr) {
    //return the last element of arr
    return arr[arr.length - 1];
}
function pushElement(arr) {
    var el = 1;
    //push el to arr
    arr.push(el);
    return arr
}
function popElement(arr) {
    //pop an element from arr
    arr.pop();
    return arr
}


// Training JS #12: loop statement --for..in and for..of

function giveMeFive(obj) {
    const myArr = [];
    for (let key in obj) {
        if (key.length === 5) myArr.push(key);
        if (obj[key].length === 5) myArr.push(obj[key])
    }
    return myArr;
}

// Training JS #13: Number object and its properties

function whatNumberIsIt(n) {
    switch (true) {
        case (n == Number.MAX_VALUE): return "Input number is Number.MAX_VALUE";
        case (n == Number.MIN_VALUE): return "Input number is Number.MIN_VALUE";
        case (isNaN(n)): return "Input number is Number.NaN";
        case (n == Number.NEGATIVE_INFINITY): return "Input number is Number.NEGATIVE_INFINITY";
        case (n == Number.POSITIVE_INFINITY): return "Input number is Number.POSITIVE_INFINITY";
        default: return "Input number is " + n;
    }
}

// Training JS #18: Methods of String object--concat() split() and its good friend join()

function splitAndMerge(string, separator) {
    return string.split(' ').map(element => element.split('').join(separator)).join(' ');
}

// Training JS #7: if..else and ternary operator

function saleHotdogs(n) {
    return n * (n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90);
}

//Abbreviate a Two Word Name

function abbrevName(name) {
    let a = name.toUpperCase().split(' ').map(e => e[0]).join('.');
    return a;
}

// Thinkful - Logic Drills: Traffic light

function updateLight(current) {
    return current === 'green' ? 'yellow'
        : current === 'yellow' ? 'red'
            : 'green';
}

// Remove First and Last Character

function removeChar(str) {
    return str.slice(1, -1)
}


// Training JS #29: methods of arrayObject-- - concat() and join()

function bigToSmall(arr) {
    return [].concat(...arr).sort((a, b) => b - a).join('>');
}

function countSheeps(arrayOfSheep) {
    let b = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] == true) {
            b++
        }
    }
    return b
}

// Switch/Case - Bug Fixing #6


function evalObject(value) {
    var result = 0;
    switch (value.operation) {
        case '+': result = value.a + value.b;
            break;
        case '-': result = value.a - value.b;
            break;
        case '/': result = value.a / value.b;
            break;
        case '*': result = value.a * value.b;
            break;
        case '%': result = value.a % value.b;
            break;
        case '^': result = Math.pow(value.a, value.b);
    }
    return result;
}

// Reverse words

const reverseWords = str => str.split(" ").map(el => el.split("").reverse().join("")).join(" ")

// Is it even?

const testEven = n => n % 2 === 0 ? true : false;


// If you can't sleep, just count sheep!!

var countSheep = function (num) {
    let a = '';
    for (let i = 1; i <= num; i++) {
        a += i + ' sheep...';

    }
    return a;
}


