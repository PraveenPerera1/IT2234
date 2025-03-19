console.log("Matching pairs")
let Arr=[1,2,3,4,5,6];
for(let i=0; i<Arr.length; i++){
    for(let j=0; j<Arr.length; j++){
        if(Arr[i]+Arr[j]==7)
            
            console.log(Arr[i],Arr[j]);
            
    }
}