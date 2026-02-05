// Task-5: Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(number){
    if (number % 2 === 0){
        return "Even";
    }
    // else if(number % 2 !== 0){
    //     return "Odd";  //you can use else if statement if you want.
    // }
    else{
        return "Odd";
    }
}
console.log(odd_even(9));