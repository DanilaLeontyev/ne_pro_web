function createUser(name) {
    return {
        printName: function () {
            console.log(name);
        }
    }
}


let test = createUser('Danila');
let test1 = createUser('Regina')
test.printName();
test1.printName();

let name = 'Danila';

function printName() {
    let name = 'Regina';
    console.log(name);
}

printName();