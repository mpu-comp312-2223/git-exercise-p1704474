// 2-6 Q2. The variable `comp312` is an array that contains 
// records of student marks in the comp312 class. Each student 
// record has three fields: name, test and exam. Write programs 
// to do the following. Use an Array iteration method 
// (i.e. `.map()`, `.filter()`, `.reduce()`, `.sort()`, etc.)
// at least once 
// in each case.
//
// 1. Get a list of student names in the comp312 class
// 2. Get a list of student record with test mark >= 75
// 3. Get a list of student name whose test mark is greater than 
//    exam mark
// 4. Assume final mark = 0.6 * test + 0.4 * exam. Make an array 
//    with records showing the final mark and name for each student.
// 5. Sort the list in descending order of exam mark
// 6. Show the student record with the highest exam mark
// 7. Calculate the average test mark
//P190201_simon

let comp312 = [
    { name: 'Peter', test: 80, exam: 70 },
    { name: 'John', test: 60, exam: 65 },
    { name: 'Mary', test: 90, exam: 85 },
    { name: 'Christine', test: 70, exam: 76 }
  ];

// 1. Get a list of student names in the comp312 class
function GetName (x){
    return x.name
}
console.log(comp312.map(GetName))
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")


//Get a list of student record with test mark >= 75
function TestMark (x){
       return x.test >=75 ;
}
console.log(comp312.filter(TestMark))
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")


//Get a list of student name whose test mark is greater than exam mark
function TestGE (x){
    return x.test > x.exam
}
console.log(comp312.filter(TestGE))
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

//Assume final mark = 0.6 * test + 0.4 * exam. Make an array with records showing the final mark and name for each student.
/** 
console.log(1)
for (let y=0; y < comp312.length; y++){
        let final = 0.6 * comp312[y].test + 0.4 * comp312[y].exam;
}
    console.log(comp312)
function FinalMark (x){
}
//console.log(comp312.map(FinalMark))
*/
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

//Sort the list in descending order of exam mark
function cmp (p1,p2){
    if(p1.exam > p2.exam) return -1;
    if(p1.exam == p2.exam) return 0;
    return 1;
}
console.log( comp312.sort(cmp) )
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

//Show the student record with the highest exam mark
function cmp (p1,p2){
    if(p1.exam > p2.exam) return -1;
    if(p1.exam == p2.exam) return 0;
    return 1;
}
console.log( comp312[0] )
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

//Calculate the average test mark
let sum = 0;
let y=0;
for (x of comp312){
    
    sum = sum + comp312[y].test;
    
    y++; 
    
    if(y == comp312.length){
        sum = sum/comp312.length
        console.log( sum )
    }
    
}

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")