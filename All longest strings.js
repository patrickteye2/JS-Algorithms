//this algorithm is a code signal algorithm meant to return the longest strings in a given array.

function solution(inputArray) {
    let num = [];
    let newArr = [];
  
   for (let i=0; i < inputArray.length; i++){
    num.push(inputArray[i].length)
    }

    let num_Max = Math.max(...num); 

    for (let i=0; i < inputArray.length; i++){
        if(inputArray[i].length == num_Max){
            newArr.push(inputArray[i]);
        }
        }
    
        return newArr;
}