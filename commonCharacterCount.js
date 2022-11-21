// Algorithm that counts the number of pairs indicarted in 2 given arrays

function solution(s1, s2) {

    let firstSplit = s1.split('')
    let secondSplit = s2.split('')
    let count = 0;

        firstSplit.forEach(element => {
        if(secondSplit.includes(element)){
            count++
            secondSplit.splice( secondSplit.indexOf(element) , 1)
        }    
        });

    return count


}


let s1 = "aabcc";

let s2 = "adcaa";



 console.log(solution(s1,s2))

 //expected answer = 3