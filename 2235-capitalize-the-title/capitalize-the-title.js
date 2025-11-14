/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    let arr = title.split(" ");
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].toLowerCase();

        if (word.length <= 2) {
            result.push(word);
        } else {
            result.push(word[0].toUpperCase() + word.slice(1));
        }
    }

    return result.join(" ");
};