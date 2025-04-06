/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 * 
 * @param {Number} num
 * @returns {Number}
 */
export const solutionFn = (num) => {
    while (num >= 10) {
        const digits = String(num).split('').map(Number);
        num = digits.reduce((acc, d) => acc * d, 1);
    }
    return num;
};