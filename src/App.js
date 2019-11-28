import { getStudents } from './data/Fetch.js';
getStudents().then(data => {
    let students = data;

    // declare male & female arrays
    let male = [];
    let female = [];

    // loop through each student in commands
    for (let student of students) {
        if (student.gender == 'Male') {
            // 1.0 push to male array 'id' of student
            male.push(student.id);
        } else {
            // 2.0 push to fmale array 'id' of student
            female.push(student.id);
        }
    }

    // join all array elements and separate with a ','
    male.join(',');
    female.join(',');

    // print male array length = number of males
    // console.log(`Number of Males : ${male.length}`);
    // print female array length = number of females
    // console.log(`Number of Females : ${female.length}`);
    // get element and render data
    document.querySelector('.male').innerText = `Number of Males : ${male.length}`;
    document.querySelector('.female').innerText = `Number of Females : ${female.length}`;

}).catch(err => {
    // do something for an error here
    // console.log(err);
})


let array = [4, 6, 7];
let k = 4;

// Complete the findNumber function below.
function findNumber(array, k) {
    // sort the array
    var sorted = array.sort();
    if (sorted.includes(k)) {
        // console.log('YES');
    } else {
        // console.log('NO');
    }
} findNumber(array, k);


// odd numbers
let l = 4;
let r = 5;

function oddNumbers(l, r) {
    let numbers = [];

    for (let i = l; i <= r; i++) {
        if (i % 2 == 1) {
            numbers.push(i);
            numbers.join(',');
        }
    }

    // console.log(numbers);

}

oddNumbers(l, r);



// paring 
let socks = [1, 1, 4, 5, 5, 5, 6, 6, 7, 9];

let number = socks.length;

function Pair(number, socks) {
    // console.log(socks.sort())

    for (let sock of socks) {

    }

}

Pair(number, socks);


// 2d arrays
let expiryLimit = 4;

let tokens = [
    [3],
    [3],
    [3],
    [0, 1, 1],
    [1, 1, 5]
];

let commands = [];

const getCommands = (tokens) => {

    // loop through the commands, from line 4
    for (let i = 3; i < tokens.length; i++) {
        // get commands   
        commands.push(...tokens[i]);
    }
}

getCommands(tokens);


// solving
const getTokens = (expiryLimit, commands) => {
    console.log(`Commands : ${commands}`);
    console.log(`Expiry Limit : ${expiryLimit}`);
    // varibales
    let state = [];
    let token_id = [];
    let startTime = [];

    // get states 
    for (let i = 0; i < commands.length; i += 3) {
        state.push(commands[i]);
    }
    console.log(`State : ${state}`);

    // get token ids
    for (let i = 1; i < commands.length; i += 3) {
        token_id.push(commands[i]);
    }
    console.log(`Token IDs : ${token_id}`);

    // get start times
    for (let i = 2; i < commands.length; i += 3) {
        startTime.push(commands[i]);
    }
    console.log(`Start Times : ${startTime}`);
     

    if(startTime[1] - startTime[0] <= expiryLimit && token_id[0] == token_id[1]) {
        console.log(`Available Tokens : 0`);
    } else {
        let available_tokes = 0;
        available_tokes ++;  
        console.log(`Available Tokens : ${available_tokes}`) 
    } 
}

getTokens(expiryLimit, commands);