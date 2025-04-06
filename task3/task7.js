/**

 * @param {number} num 
 * @returns {boolean}
 */
const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
};

/**

 * @param {number} 
 * @param {number} 
 * @returns {'hit' | 'run'} 
 */
export const hitOrRun = (a, b) => {
 
    const randomNum = Math.floor(Math.random() * (b - a + 1)) + a;
    
    return isPrime(randomNum) ? 'run' : 'hit';
};