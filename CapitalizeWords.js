function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
  }
//   let arr=[1,23,3,4,5,6,7]
  let res=capitalizeWords(['car','taco','banana'])
console.log(res)