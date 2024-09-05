/* Q1.Find Grades
Your school has the following grading system based upon the marks (M) obtained by a student:
-- If M≤10, the grade will be E.
-- If 11≥M≤20, the grade will be D.
-- If 21≥M≤30, the grade will be C.
-- If 31≥M≤40, the grade will be B.
-- If 41≥M≤50, the grade will be A.*/

let score = 90;
let grade;

switch(true) {
    case (score >= 41 && score <= 50):
        grade = 'A';
        break;

    case (score >= 31 && score <= 40):
        grade = 'B';
        break;

    case (score >= 21 && score <= 30):
        grade = 'C';
        break;

    case (score >= 11 && score <= 20):
        grade = 'D';
        break;

    case (score >= 0 && score <= 10):
        grade = 'D';
        break;

    default:
        grade = 'invalid';
        break;
}

console.log(`Grade: ${grade}`);

//Question2

/*Get Value
You are provided with a table containing some characters and their 
corresponding values. Your task will be to find the value from the 
table corresponding to an input character and return it.
| P or p - PrepBytes |
| Z or z - Zenith |
| E or e - Expert Coder |
| D or d - Data Structure |
*/

let value = "c";
let output;

switch(true) {
    case (value === 'p' || value === 'P'):
        output = "PrepBytes";
        break;

    case (value === 'z' || value === 'Z'):
        output = "Zenith";
        break;

    case (value === 'e' || value === 'E'):
        output = "Expert Coder";
        break;

    case (value === 'd' || value === 'D'):
        output = "Data Structure";
        break;

    default:
        output = "invalid";
        break;
}
console.log(output);

//Question3: find the greatest number

let no1=10;
let no2=20;
let no3=30;
if(no1>no3 && no1>no2)
console.log('greatest no1')

else if(no2>no1 && no2>no3)
console.log(' greatest no2')

else if(no3>no1 && no3>no2)
console.log('greates no3')
else

console.log('equal no')

//Question3: find the 2nd smallest number

let nu1=10;
let nu2=20;
let nu3=30;

if(nu1>nu3 && nu1>nu2)
console.log('greatest no1')

else if(nu2>nu1 && nu2>nu3)
console.log(' greatest no2')

else if(nu3>nu1 && nu3>nu2)
console.log('greates no3')

else
console.log('equal no')





