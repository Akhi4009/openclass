
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
