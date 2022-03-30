const romanToInt = (s) => {
    const romanArray = s.split('')
    const numArray = [];

    for(let i = 0; i < romanArray.length; i++){
            let j = i+1;

        if(romanArray[i] === 'I' && romanArray[j] === 'V') {
            numArray.push(4)
        } else if(romanArray[i] === 'I' && romanArray[j] === 'X') {
            numArray.push(9)
        } else if(romanArray[i] === 'X' && romanArray[j] === 'L') {
            numArray.push(40)
        } else if(romanArray[i] === 'X' && romanArray[j] === 'C') {
            numArray.push(90)
        } else if(romanArray[i] === 'C' && romanArray[j] === 'D') {
            numArray.push(400)
        } else if(romanArray[i] === 'C' && romanArray[j] === 'M') {
            numArray.push(900)
        }

        switch(romanArray[i]){
            case 'M':
                numArray.push(1000);
                break;
            case 'D':
                numArray.push(500);
                break;
            case 'C':
                numArray.push(100);
                break;
            case 'L':
                numArray.push(50);
                break;
            case 'X':
                numArray.push(10);
                break;
            case 'V':
                numArray.push(5);
                break;
            case 'I':
                numArray.push(1);
                break;
        }
        console.log(numArray)
    }

    const final =numArray.reduce((a,b) => a + b, 0)

    return final;
}

console.log(romanToInt('MCMXCIV'))