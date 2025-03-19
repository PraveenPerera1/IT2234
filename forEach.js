let maxArr =[10,8,9,4,5,6];
let a=0;
maxArr.forEach(n=>{
    (a<n) ? a=n : n=n;
})

console.log("Maximum Value: "+ a);