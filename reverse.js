
function reverse(str){
    if(str.length===0) return str

    return reverse(str.slice(1))+ str[0]
}

function isPaildrome(str){
   let nstr= reverse(str)
   if(str===nstr) return true
   return false
}

let res=isPaildrome("aka")
console.log(res)

const isOdd = val => val % 2 !== 0;




function someRecursive(array,isOdd){
 
   if (array.length === 0) return false;
    if (isOdd(array[0])) return true;
    return someRecursive(array.slice(1),isOdd);
}
let res1=someRecursive([1,2,3,4], isOdd) // true
someRecursive([4,6,8,9], isOdd) // true
someRecursive([4,6,8], isOdd) // false
console.log(res1)
