const isPalindrome = (x) => {
    const numArray = x.toString().split('');
    let j = (numArray.length-1);

    for(let i = 0; i < numArray.length; i++){
        if(numArray.indexOf(numArray[i] !== numArray.indexOf(numArray[j]))){
            if(numArray[i] !== numArray[j]){
                return false;
            }
            j--;
        }
    }

    return true;
}

console.log(isPalindrome(12421))