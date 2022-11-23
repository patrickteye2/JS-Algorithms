    // Algorithm to confirm that the first half of a number is equal to the last half
function solution(n) {

    let arr = Array.from(String(n), Number)
    let param = (arr.length)/2 
    let firstHalf = arr.slice(0,param)
    let lastHalf = arr.splice(param,arr.length)
    
    let result1 = firstHalf.reduce((a,b) => a + b)
    let result2 = lastHalf.reduce((a,b) => a + b)

    if(result1 == result2){
        return true
    }
    return false;
}


let n = 1230;
let m = 339299;

console.log(solution(n)) //Expect true
console.log(solution(m)) //Expect false
