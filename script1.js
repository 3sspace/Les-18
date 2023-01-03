
let first = prompt(
    "Enter first month salary",
    '1'
    );
let second = prompt(
    "Enter second month salary",
    '2'
    );
let a = first, b = second, c = 2000;
let result = parseInt(a) + parseInt(b);
alert(`You salary for 2 month  is: ${result}$`);
alert(`Your have an extra bonus! Your total salary was: ${result}$ It's increase for 1$ and now it is: ${result = result + 1}$`);
result++;
if (result >= c){
alert (`I'm ready to work`);
}
else {
alert (`I'm out`);
}

