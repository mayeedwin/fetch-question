import { getStudents } from './data/Fetch.js';
getStudents().then(data => {
    let students = data;

    // declare male & female arrays
    let male = [];
    let female = [];

    // loop through each student in students
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
    console.log(`Number of Males : ${male.length}`);
    // print female array length = number of females
    console.log(`Number of Females : ${female.length}`);
    // get element and render data
       document.querySelector('.male').innerText = `Number of Males : ${male.length}`;
       document.querySelector('.female').innerText = `Number of Females : ${female.length}`;

}).catch(err => {
    // do something for an error here
    console.log(err);
})
