const number = null
const float = null
const str = null
const bool = null
const undef = null
const nullVar = null

const square = (n) => {
    return n*n;
}

const hello = (name) => {
    const res = `Hello, ${name}`;
    return res;
}

const concat = (strings) => {
    let str = '';
    strings.map(el => str = str + '' + el);
    return str;
}

const getType = (value) => {
    return typeof(value);
}

const max = (a, b) => {
    let largest
    if (a > b) {
        largest = a;
    }else{
        largest = b;
    }
    return largest;
}

const max3 = (a, b, c) => {
    let largest
    if (a >= b && a >= c) {
        largest = a;
    } else if ( b >= a && b >= c){
        largest = b;
    }else{
        largest = c;
    }
    return largest
}

const change = (N, C, K, L) => {
    let a
    if ((N>K) || (N>=K && L <C)){
        a= 'not enough'
        return a;
    }else{
        let dollar = K - N;
        let cent = L - C;
         a = `$${dollar}.${cent}`
        return a;
    }
}

const triangle = (height) => {
    for (let line = "#"; line.length < 8; line += "#")
    return line;
}

const fizzbuzz = (N) => {
    for (let n = 1; n <= 100; n++) {
        let output = "";
        if (n % 3 == 0) output += "Fizz";
        if (n % 5 == 0) output += "Buzz";
        console.log(output || n);
    }
}

const countChar = (str, char) => {
    let len = str.length;
    let count = 0;
    for(i=0; i < len; i++){
        if(str[i] === char){
            count++
        }
    }
    return count;
}

//don't edit this export
module.exports = {
    number, float, str, bool, undef, nullVar,
    square,
    hello,
    concat,
    getType,
    max,
    max3,
    change,
    triangle,
    fizzbuzz,
    countChar
}
