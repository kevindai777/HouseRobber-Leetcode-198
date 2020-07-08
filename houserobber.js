//Objective is to find the largest sum of money a robber can make,
//with the condition that he cannot rob two adjacent elements in an array.

let nums = [1,2,3,1]


//O(n) solution that uses dynamic programming to decide whether to rob
//a house or not

let prevMax = 0
let currMax = 0
    
//Either choose the element two before it and the current
//or choose the previous element
//f(k) = max(f(k - 2) + Ak, f(k - 1))
for (let num of nums) {
    let temp = currMax
    currMax = Math.max(prevMax + num, currMax)
    prevMax = temp
}
    
return currMax