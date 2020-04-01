//有一座高度是10级台阶的楼梯，从下往上走，每跨一步只能向上1级或者2级台阶。
//要求用程序来求出一共有多少种走法？

//1.递归
//走到10级前一步有两种：8-10，9-10
//所以（0-10）=（0-8）+（0-9）

function getClimbingWays1(n){
    if(n < 1)
        return 0;

    if(n === 1)
        return 1;
    
    if(n === 2)
        return 2;

    return getClimbingWays1(n-1) + getClimbingWays1(n-2);
}

function getClimbingWays2(n){
    if(n < 1)
        return 0;

    if(n === 1)
        return 1;
    
    if(n === 2)
        return 2;

    let map = new Map();

    if(map.has(n)){
        return map.get(n);
    } else{
        let value = getClimbingWays2(n-1) + getClimbingWays2(n-2);
        map.set(n, value);
        return value;
    }
}

function getClimbingWays3(n){
    if(n < 1)
        return 0;

    if(n === 1)
        return 1;
    
    if(n === 2)
        return 2;
    
    let a = 1,
        b = 2,
        temp = 0;
    
    for (let i = 3; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    
      return temp;
}