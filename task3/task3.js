/**
 * 统计对象中各类值类型的出现次数
 * @param {Object} obj 输入对象
 * @returns {Object} 类型统计对象（键为类型，值为出现次数）
 */
export const solutionFn = (obj) => {
    const typeCount = {};
    
    for (const key in obj) {

        if (obj.hasOwnProperty(key)) {
            const valueType = typeof obj[key];
            
            if (typeCount[valueType]) {
                typeCount[valueType]++;
            } else {
                typeCount[valueType] = 1;
            }
        }
    }
    
    return typeCount;
};
module.exports = { solutionFn }; 