function sockMerchant(n, ar) {
  let res = 0;
  const map = {};
  for (let i = 0; i < n; i++) {
    console.log(ar[i]);
    const el = ar[i];
    if (map[el]) {
      res++;
      map[el] = false;
    } else {
      map[el] = true;
    }
    console.log(map);
  }
  return res;
}

console.log(sockMerchant(5, [1, 2, 1, 3, 5]));
console.log(sockMerchant(1, [1]));
console.log(sockMerchant(4, [1, 1, 3, 5]));
console.log(sockMerchant(6, [1, 2, 1, 3, 5, 2]));
console.log(sockMerchant(7, [1, 2, 1, 3, 5, 2, 3]));
