function indexFun (arr, val){
    if(!Array.isArray(arr)) return;

    for( let i = 0 ; i < arr.length; i++){
        if(arr[i] === val)
            return i;
    }

    return -1;
}