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
