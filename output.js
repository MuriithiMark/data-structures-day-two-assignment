// Output of program

var obj = {};
obj[1] = 'One';
obj['1'] = 'String One';

console.log(obj[1]); 
// Output: String One
console.log(obj['1']);
// Output: String One
// This is because objects only allow strings as the keys
// Therefore when use adding a key of integer 1 and a string '1' references the same key
// Initial obj['1'] has a value of 'One', but it is then assigned to 'String One'

console.log(obj[1] === obj['1']);
// Output: true
// true is displayed since both reference the same value in the obj
// They both return a value of 'String One' which has the same type and equal value
// thus passes equality check '===' which is a strict equal