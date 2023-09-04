   // Student Name: Dathan Dominic Neal
   // Student ID: 1218482291
   // Date: September 4, 2023

/*
function GreetTheStudent(studentName){ //parameter //named function
    return `Hello there, ${studentName}!`;
}

const GreetTheStudent = function(studentName){ //parameter // anonymous  // expression
    return `Hello there, ${studentName}!`;
}


//fat arrow function
const GreetTheStudent(studentName) => { //parameter
    return `Hello there, ${studentName}!`;
}
*/

const GreetTheStudent = studentName => `Hello there, ${studentName}!`;

/*
const fullName = function (firstName, middleName, lastName){
    return `${lastName}, ${middleName}, ${firstName}`; 
}


const fullName = function (firstName, middleName, lastName)=>{
    return `${lastName}, ${middleName}, ${firstName}`; 
}
*/

const fullName = (firstName, middleName, lastName) => `${lastName}, ${middleName}, ${firstName}`; 


const student = 'Dathan Neal';
const greet = GreetTheStudent(student); //argument
console.log(greet)

const titleName = fullName('Dathan', 'Dominic', 'Neal');
console.log(titleName);

