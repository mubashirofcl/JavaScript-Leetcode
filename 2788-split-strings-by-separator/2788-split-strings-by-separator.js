/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let arr = [];
    let res = words.map((v)=> v.split(separator)).flat();
    
    for(let i = 0; i < res.length; i++){
        if(res[i] !== ""){
            arr.push(res[i])
        }
    }
    return arr;
};