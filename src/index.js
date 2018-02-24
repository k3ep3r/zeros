module.exports = function getZerosCount(number) {
    var result = 0;
    var pow = 5;
        while (number = Math.floor(number / pow)) {
            result += number;
        }
    return result;
}
