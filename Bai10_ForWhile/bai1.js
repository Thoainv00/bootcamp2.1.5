let n = parseInt(prompt("Enter your number (need greater than 0): "))
while (n <= 0) {
    alert("Redo")
    n = parseInt(prompt("Enter your number: "))
}
let tong = 0;
// let tich = 1;
for (let i = 1; i <= n; i++) {
    tong += i
    // tich *=i
}
console.log(tong)
// console.log(tich)
