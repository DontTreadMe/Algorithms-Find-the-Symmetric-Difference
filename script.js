sym = (...args) => {
  const union = args[0].concat(args[1]);
  const intersection = args[0].filter(x => args[1].indexOf(x) !== -1);
  //const res = intersection.concat(args[1].filter(x => args[0].indexOf(x) === -1));
  console.log(intersection, union);
  return union;
}

sym([1, 2, 3, 3], [5, 2, 1, 4]);
