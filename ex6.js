function checkSameElements(arr) {
    if (arr.length === 0) {
        return true;
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false;
        }
    }
    return true;
}
const arr = [1, 2, 3]; // false
console.log(checkSameElements(arr));