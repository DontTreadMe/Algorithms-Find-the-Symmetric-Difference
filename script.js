const sym = (...args) => {  
  const sym2arr = (arr1, arr2) => {
    const tempRes = [];
    for (const x of arr1) {
      if (arr2.indexOf(x) === -1 && tempRes.indexOf(x) === -1) {
        tempRes.push(x)
      }
    }
    for (const x of arr2) {
      if (arr1.indexOf(x) === -1 && tempRes.indexOf(x) === -1) {
        tempRes.push(x)
      }
    }
    return tempRes.sort((a, b) => a-b);
  }
  let res =  sym2arr(args[0], args[1]);
  for (let i = 2; i < args.length; i++) {
    res = sym2arr(res, args[i]);
  }
  console.log(`res: ${res}`);
  return(res);
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
