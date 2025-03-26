function hIndex(citations){
    citations.sort((a, b) => b - a);
    let h = 0;
    for(let i = 0; i < citations.length; i++){
        if(i >= citations[i]){
            return h
        }        h++

    }
    return h;
};