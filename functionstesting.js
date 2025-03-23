console.log('_______________function________________')
function msg(){
    console.log('hello')
}
msg()

console.log('_______________return function________________')
function sum(){
    return 5+6
}
console.log(sum())

function sub(a,b){
    return a-b
}
console.log(sub(5,3))

console.log('_______________boolean function________________')

function isprime(num){
    if(num<=1){
        isprime = false
    }
    else{
        for(var i=2 ; i <= num/2 ; i++){
            if(num%2 == 0){
                isprime = false
            }
            else{
                isprime = true
            }
        }
    }
    if(isprime){
        console.log(num + ' is a prime number')
    }
    else{
        console.log(num + ' is not a prime number')
    }
}
isprime(1)

console.log('_______________recursive function________________')
function recuesive(num){
    if(num<1)return
    console.log(num)
    recuesive(num-1)
}
recuesive(5)




console.log('_______________arrow function________________')

const mesg = ()=>{return console.log('Hello')}
mesg()

console.log('_______________summation with arrow function________________')
const summ = (a,b)=>{
    let add = a+b;
    return console.log('summation is: ' + add)
    
}
summ(10,5) 

console.log('_______________rest parameter________________')
const mysum = (...n) =>{
    return console.log(n)
}
mysum(4,5,3,1,10)

const mysum2 = (...n) =>{
    var t=0
    n.forEach(i => {
        t=t+i
    });
    console.log('sum is : ' + t)
}
mysum2(1,5,4,63,2)


//02
const mySum=(...n)=>
    {
        return n.reduce((t,i)=>t=t+i)
    }
    console.log(mySum(4,5,6,89,2))

    
console.log('_______________callback function________________')
const greet = (mesg,fun)=>{
    console.log("Hello my name is " + mesg)
    fun()
}
greet("mr.",()=>{console.log("praveen")})

//02
const multwo =(n)=>n*2

const myarr=(mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}
myarr(multwo,4,5,6,8,2)
