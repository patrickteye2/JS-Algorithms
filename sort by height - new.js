function solution(a) {
    let filtered = a.filter(val => val !== -1)
    let sorted = filtered.sort((a, b) => a-b)
    //returns '-1'(tree) or first value of sorted
    return a.map(val => val === -1? -1: sorted.shift())
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180];

console.log(solution(a));