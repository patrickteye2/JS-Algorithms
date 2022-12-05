function solution(inputString) {
    let init = 0;
    let final = 0;
    let reverseArr = [];
    let originals = [];
    let count = 0;
    let state = false;

    for(let element in inputString){
        if(inputString[element] == '('){
            count++
        }
        if(inputString[element] == ')'){
            count++
        }
    }

    if(count % 2 == 0){
        state = true;
    }
    console.log(state)
  
    if(state == true){
        let tempArr = []
        init = inputString.indexOf('(');
        final = inputString.lastIndexOf(')');

        for(let i = init+1; i < final; i++){
            tempArr.push(inputString[i])
        }
        originals.push(tempArr.join(''))
        tempArr.reverse();
        reverseArr.push(tempArr.join(''))
        tempArr = [];

    }
    
    return reverseArr;
}

const a = 'hskn(bar)';  
console.log(solution(a));
