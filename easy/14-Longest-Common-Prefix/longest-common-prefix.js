const longestCommonPrefix = (strs) => {
    let prefix = '';

    for(let i = 0; i < strs.length; i++){
        const wordArray = strs[i].split('')
        prefix = `${prefix}${wordArray[i]}`
        console.log(prefix)
    }

    return wordArray;
}

console.log(longestCommonPrefix(["flower","flow","flight"]))