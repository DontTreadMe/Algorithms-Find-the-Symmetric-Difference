sym = (...args) => {
  
  sym2arr = (arr1, arr2) => {
    const res = [];
    for (const x of arr1) {
      //console.log(x);
      if (arr2.indexOf(x) === -1 && res.indexOf(x) === -1) {
        res.push(x)
      }
    }
    for (const x of arr2) {
      if (arr1.indexOf(x) === -1 && res.indexOf(x) === -1) {
        res.push(x)
      }
    }
    console.log(res.sort((a, b) => a-b));
    return res.sort((a, b) => a-b);
  }
  sym2arr(args[0], args[1]);
}

sym([1, 2, 3, 3], [5, 2, 1, 4]);
