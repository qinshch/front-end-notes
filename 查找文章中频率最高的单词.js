function findMostWord(article){
    if(!article) return;

    //1. 去掉首位的空格，全部转化为小写
    article = article.trim().toLowerCase();

    //1. 找到所有的单词
    let wordList = article.match(/[a-z]+/g);
    let visited = [],
        maxNum =  0,
        maxWord = "";
    
    wordList.forEach(function(item){
        if(visited.indexOf(item) < 0){
            let word = new RegExp(" " + item + " ", "g"),
                num = article.match(word).length;
            if(num > maxNum){
                maxNum = num;
                maxWord = item;
            }
        }
    })

    return maxWord + " " + maxNum;
}