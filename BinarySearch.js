
function Binarysearch(arr,ele){
let start=0
let end=arr.length-1;
let middle=Math.floor((start+end)/2)
while(arr[middle]!==ele&&start<=end){
    if(ele<arr[middle]) end=middle-1;
    else start=middle+1
    middle=Math.floor((start+end)/2)

}
return arr[middle]===ele?middle:-1
}
let res=Binarysearch([1,2,3,4,6,7],9)
console.log(res)