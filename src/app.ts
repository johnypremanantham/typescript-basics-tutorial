console.log('adas TypeScript!');

const test = [
    {key: 'value', key1: 'value1'}
]

const mappedTests = test.map( test => test.key.toUpperCase());

console.log(mappedTests);

function multiply(a: number, b: number = 10) {
    return a * b;
}

console.log(multiply(10));