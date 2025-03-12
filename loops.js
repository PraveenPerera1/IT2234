console.log("Numbers from 1 to 10 :");
for (let a = 1; a <= 10; a++) {
    console.log(a);
}

console.log("\nOdd numbers from 1 to 10 : ");
let a = 1;
while (a <= 10) {
    if (a % 2 != 0) {
        console.log(a);
    }
    a++;
}

console.log("\nNumbers in reverse : ");

let b = 10;
while (b > 0) {
    console.log(b)
    b--
}

// Reverse the numbers in left and right 4321 - 5 - 9876

console.log("\nReversing the numbers in left and right")

let num = 15;
let middle = Math.round(num / 2)

a = 1;
b = num;
c = middle;
while (a <= num) {
    
    if (a < middle) {
        console.log(--c)
    } else if (a == middle) {
        console.log("\n"+ middle + "\n")
    } else {
        console.log(b)
        b--
    }
    a++;
}