/**
 * 检测文本中是否包含任意关键词（不区分大小写）
 * @param {string} text 待检测文本
 * @param {string[]} keywords 关键词列表
 * @returns {boolean} 是否包含至少一个关键词
 */
export const isSpam = (text, keywords) => {
    // 将文本统一转为小写
    const lowerText = text.toLowerCase();
    // 遍历关键词列表（过滤空值）
    return keywords.some(keyword => {
        if (!keyword) return false; // 忽略空字符串
        return lowerText.includes(keyword.toLowerCase());
    });
};