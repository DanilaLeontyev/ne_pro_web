'use strict'

// let printMessage = function (message) {
//     console.log(message)
// }

let printMessage;

if (false) {
    function printMessage() {
        console.log(true);
    }
} else {
    function printMessage() {
        console.log(false);
    }
}

printMessage();