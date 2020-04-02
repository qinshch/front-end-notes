var arr = [6, 4, 1, 8, 2, 11, 23];
console.log(Math.max.apply(null,arr));
//Math.max(1,2,3,4)是这样用到
//由于arr是数组，单独调用会返回NaN。