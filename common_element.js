let arr1 =[4,5,6,3,7];
let arr2 =[8,3,2,1,5];
console.log("Common elemts: ")
for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        if(arr1[i]==arr2[j])
            
            console.log(arr1[i]);
    }
}
