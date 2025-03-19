//JSON
//Key:Value

let student ={regNo:'2021ict08',name:'Praveen',age:23};
console.log(student.name);

let students =[
    {regNo:'2021ict08',name:'Praveen',age:23},
    {regNo:'2021ic66',name:'Dew',age:35},
    {regNo:'2021ict45',name:'Dumka',age:20}
];

console.log(students);
for(let i=0; i<students.length; i++){
    console.log(students[i].name);  
}