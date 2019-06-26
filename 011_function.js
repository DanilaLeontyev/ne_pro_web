// Function is a block of code
// designed to perform a particular task

function doSomething() {
    console.log('Hello ');
}

// And now we need to invoke function

doSomething();

// Parameters

function printUserName(userName, val1, val2 = "DEFAULT") {
    console.log('Hello ' + userName);
    console.log('val1 = ' + val1);
    console.log(val2)
}

printUserName('Danila', 'Value1');

// Return values

function getMessage(userName) {
    return 'Hello ' + userName
}

let message = getMessage('Danila')

console.log(message)