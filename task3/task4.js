 /**
 * @param {unknown} leftOperand 
 * @param {unknown} rightOperand 
 * @returns {number} 
 * @throws 
 */
export const sum = (leftOperand, rightOperand) => {

    const isNumber = (value) => typeof value === 'number' && !isNaN(value);

    const isLeftValid = isNumber(leftOperand);
    const isRightValid = isNumber(rightOperand);

    if (!isLeftValid || !isRightValid) {
        if (!isLeftValid && !isRightValid) {
            throw new Error('Operands are not numbers');
        } else if (!isLeftValid) {
            throw new Error('The left operand is not number');
        } else {
            throw new Error('The right operand is not number');
        }
    }

    return leftOperand + rightOperand;
};