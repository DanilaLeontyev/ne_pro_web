// toString
let value = true;
typeof (String(value)) // string

// toNumber
let value = '242423432';
typeof (Number(value)); // number
typeof (+value);        // number

// toBoolean
let value = 1;
typeof (Boolean(value)) // boolean


Number();
// undefined => NaN
// null => 0
// true/false => 1/0
// string => NaN/number

Boolean();
// 0, null, undefined, NaN, "" => false
// any other => true
