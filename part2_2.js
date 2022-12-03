//Gunjan Chaudhary- RWDI Technical Interview Question- Day2-2
const {readFileSync, promises: fsPromises} = require('fs');

let arr = [];           //arradepth to store data read from file

//func to read to data form file
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  arr  = contents.split(/\r?\n/);

  return arr;
}
 
//func to get the value of final position 
function findPosition(){
    let horizontal = 0, depth =0, aim =0;                              //taking values of horizontal position and depth  
    let finalAns = 0;
    for(let i =0; i< arr.length; i++){
        let value = arr[i].split(' ');                                 //splitting the words in string

        //if keyword is forward then we increment value of horizontal with whatever number we get && increment depth by aim*number
        if(value[0].includes("forward")){
            horizontal = horizontal + parseInt(value[1]);
            depth = depth + aim * parseInt(value[1]);
        }

        //for down, we simply increment aim's value 
        else if(value[0].includes("down")){
            aim = aim + parseInt(value[1]);
        }

        //for up, we simply decrement aim's value
        else if(value[0].includes("up")){
            aim = aim - parseInt(value[1]);
        }
    }

    finalAns = horizontal*depth;                                 //calculating final ans

    return finalAns;
}

syncReadFile('./part2.txt');
console.log("Final position",findPosition());
