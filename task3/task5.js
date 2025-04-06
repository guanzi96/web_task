/**

 * @param {Array} initialCommit 
 * @returns {Object} 
 */
export const getMinimalCVS = (initialCommit) => {

    const deepCopy = (arr) => JSON.parse(JSON.stringify(arr));
    

    const versions = [deepCopy(initialCommit)];
    
    return {

        head: () => deepCopy(versions[versions.length - 1]),
        

        history: () => versions.map(v => deepCopy(v)),
        

        push: (element) => {
            const newVersion = deepCopy(versions[versions.length - 1]);
            newVersion.push(element);
            versions.push(newVersion);
        },
        

        pop: () => {
            const current = deepCopy(versions[versions.length - 1]);
            const popped = current.pop();
            versions.push(current);
            return popped;
        }
    };
};