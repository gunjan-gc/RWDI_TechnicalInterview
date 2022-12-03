//Gunjan Chaudhary- RWDI Technical Interview Question- Day1-1

const {readFileSync, promises: fsPromises} = require('fs');

let arr = [];           //array to store data taken from input.txt file
let count = 0;          //counter to get number of elements with depth measurement


//func to read to data form file
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  arr  = contents.split(/\r?\n/);
  return arr;
}

//func to count number of times depth measurement increased
function countOfDepthMeasurement(){
    for(let i = 1; i <= arr.length; i++){
        if (parseInt((arr[i-1])) < parseInt((arr[i]))){
            count++;
        }
    }

 return count;
}

syncReadFile('./input.txt');
console.log("Total number of times: ",countOfDepthMeasurement());

