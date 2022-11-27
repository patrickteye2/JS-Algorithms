    //  In an array of trees and persons, it is assumed that all -1's are trees
    //  And all other numbers represent persons heights.
    //  Task: Rearrange the input array such that all numbers are sorted without
    //  the movement of the trees '-1'

function solution(a) {
    //  converts array of numbers to strings
    let stringA = a.map(String);
    let indexes = [];
    let alphabets = ['a','b','c','d','e','f','g','h','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let final = [];

     if(stringA.includes('-1')){
    //loops over arrray, indicate indices of the trees and replaces with alphabets
    for(let i = 0; i < stringA.length; i++){
        if(stringA[i] == '-1'){
            indexes.push(i)
            stringA.splice(i , 1, alphabets[i])
        }
    }
    
    // sorts out numbers
    let sorted = stringA.sort();    
    sorted.sort(function(a,b){
        return a-b
    })
 

    //replaces the indices of the trees with their original value '-1'
    for(let i = 0; i < sorted.length; i++){
    
        for(let j = 0; j < indexes.length; j++){
            if(sorted.indexOf(sorted[i]) == indexes[j]){
                 sorted.splice(indexes[j] , 0, '-1')
            }
        }

        if(final.length < a.length){
        final.push(Number(sorted[i]));
        }
    }
 
       return final;
    }

    else{
        final = a.sort(function(a,b) {
            return a - b;
        })
    }

  return final;
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(solution(a)); //expected  [-1, 150, 160, 170, -1, -1, 180, 190]


