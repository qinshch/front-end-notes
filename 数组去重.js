function unique(array){
    if(!Array.isArray(array) || array.length <= 1) return;

    var result = [];

    array.forEach(function(item){
        if(result.indexOf(item) === -1)
            result.push(item);
    })

    return result;
}

function unique(array){
    if(!Array.isArray(array) || array.length <= 1) return;

    return [...new Set(array)];
}