// Task-3: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// Using for Loop

function make_avg(array){
    let sum = 0;
    for (let i = 0; i<array.length; i++){
        sum += array[i];
    }
    let result = sum / array.length;
    return result;
}

console.log(make_avg([4, 8, 12, 16, 20, 24]));


// Experimental: Using (for of) loop
/*
function make_avg(array){
    let sum = 0;
    for(let num of array){
        sum += num;
    }
    let result = sum / array.length;
    return result;
}

console.log(make_avg([4,8,12,16,20,24]));
*/