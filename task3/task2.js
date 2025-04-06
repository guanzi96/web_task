/**
//  
//  * @param {Array} array 
//  * @param {Function} filterFn 
//  * @param {Boolean} inplace 
//  * @returns {Array} 
//  */
export const filter = (array, filterFn, inplace = false) => {
    if (inplace) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (!filterFn(array[i], i, array)) {
                array.splice(i, 1);
            }
        }
        return array;
    } else {
        // 非原地模式：创建新数组存储结果
        const filteredArray = [];
        for (let i = 0; i < array.length; i++) {
            if (filterFn(array[i], i, array)) {
                filteredArray.push(array[i]);
            }
        }
        return filteredArray;
    }
};