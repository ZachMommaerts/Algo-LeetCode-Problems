const romanToInt = (s) => {
    const romanArray = s.split('')
    const numArray = [];
    let previousValue;

    for(let i = 0; i < romanArray.length; i++){
        let j = i+1;

        if(romanArray[i] === 'I' && romanArray[j] === 'V') {
            previousValue = 4;
            numArray.push(previousValue)
            i+2;
        } else if(romanArray[i] === 'I' && romanArray[j] === 'X') {
            previousValue = 9;
            numArray.push(previousValue)
        } else if(romanArray[i] === 'X' && romanArray[j] === 'L') {
            previousValue = 40;
            numArray.push(previousValue)
        } else if(romanArray[i] === 'X' && romanArray[j] === 'C') {
            previousValue = 90;
            numArray.push(previousValue)
        } else if(romanArray[i] === 'C' && romanArray[j] === 'D') {
            previousValue = 400;
            numArray.push(previousValue)
        } else if(romanArray[i] === 'C' && romanArray[j] === 'M') {
            previousValue = 900;
            numArray.push(previousValue)
            i+2;
        } else {

            switch(romanArray[i]){
                case 'M':
                    if(previousValue !== 900) {
                        numArray.push(1000);
                    }
                    break;
                case 'D':
                    if(previousValue !== 400) {
                        numArray.push(500);
                    }
                    break;
                case 'C':
                    if(previousValue !== 90) {
                        numArray.push(100);
                    }
                    break;
                case 'L':
                    if(previousValue !== 40) {
                        numArray.push(50);
                    }
                    break;
                case 'X':
                    if(previousValue !== 9) {
                        numArray.push(10);
                    }
                    break;
                case 'V':
                    if(previousValue !== 4) {
                        numArray.push(5);
                    }
                    break;
                case 'I':
                    numArray.push(1);
                    break;
            }
        }
    }

    console.log(numArray)

    const final =numArray.reduce((a,b) => a + b, 0)

    return final;
}

console.log(romanToInt('MCMXCIV'))