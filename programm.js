
const express = require('express');
const app = express()
const port = 3001;
//List of student Details JSON 
let student = {regno : '2021/ICT/08',name :'Praveen', age :23,course : 'IT',skills : ['java',"JS",'c++']}
console.log(student)
console.log(student.name)
let students = [
{regno : '2021ICT014', name : 'Praveen', age : 23 ,course : 'IT',gender : "male"},
{regno : '2021ICT214', name : 'Mihirini', age : 23 ,course : 'IT',gender : "Female"},
{regno : '2021ICT222', name : 'Udara', age : 22 ,course : 'IT',gender : "male"}
]
console.log(students)
app.get('/stu',(req,res)=>{
    res.send(students);
});
app.get('/stu:id',(req,res)=>{
    const id =req.params.id
    const result = students.map((student)=>student.id==id);
    res.send(result);
});
app.get('/stu:id',(req,res)=>{
    const regno =req.params.regno
    console.log(regno)
    const result = students.find((student)=>student.regno==regno);
    //check is the student  available or not ? , if not return an error message
    if (result){
        res.send(result);
    }
    else{
        res.status(404).send("This student not found");
    }
    
   
});
//When the output needs to be according to gender
app.get('/stu/gender/:gen',(req,res)=>{
    const gender =req.params.gen
    console.log(gender)
    const result = students.filter((student)=>student.gender==gender);
    res.send(result);
});
app.listen(port,()=>
{
    console.log(`server is running on ${port}`);
})