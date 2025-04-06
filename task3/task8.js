/**

 * @param {string} snakeCaseString 
 * @returns {string} 
 */
export const solutionFn = (snakeCaseString) => {
    const words = snakeCaseString.split('_');
    
    return words.map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    }).join('');
};