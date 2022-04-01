const isValid = (s) => {
    const parenthesisArray = s.split('')
    let reversePointer;

    for(let i = 0; i < parenthesisArray.length; i++){
        reversePointer = parenthesisArray.length - 1;

        if(parenthesisArray[i] === '(' && parenthesisArray[reversePointer] !== ')') {
            return false;
        } else if (parenthesisArray[i] === '[' && parenthesisArray[reversePointer] !== ']') {
            return false;
        } else if (parenthesisArray[i] === '{' && parenthesisArray[reversePointer] !== '}') {
            return false;
        }
    }

    return true;
}

console.log(isValid('()[]{}'))