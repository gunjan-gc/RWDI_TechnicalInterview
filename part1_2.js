//Gunjan Chaudhary- RWDI Technical Interview Question- Day1-2

const {readFileSync, promises: fsPromises} = require('fs');

let arr = [];           //array to store data taken from input.txt file
let count = 0;          //counter to get number of elements with depth measurement


//func to read to data form file
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  arr  = contents.split(/\r?\n/);
  return arr;
}

//func to count number of times sum of previous 3 elements is greater than next 3 element's sum
function countOfDepthMeasurement(){
    let sumArr = [];                    //arr to store sum of set of 3 elements
    let a=0, b=0, c=0, sum =0;          //initializing values to 0
    
    for(let i = 1; i <= arr.length; i++){
        a = parseInt(arr[i-1]);
        b = parseInt(arr[i]);
        c = parseInt(arr[i+1]);
        
        sum = a+b+c;
        sumArr.push(sum);               //pushing to another array that has sum of set of 3 numbers
    }

    //checking if the sum is greater for next set of 3 elements
    for(let i =1; i <sumArr.length; i++){
        if (parseInt((sumArr[i-1])) < parseInt((sumArr[i]))){
            count ++;
        }
    }
    
 return count;
}

syncReadFile('./input.txt');
console.log("Count based on set of 3 elements: ",countOfDepthMeasurement());

