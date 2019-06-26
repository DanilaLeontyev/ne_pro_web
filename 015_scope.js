let globalVar1 = 2,
    globalVar2 = 5,
    name = 'Danila';


function multiply() {

    function getName() {
        console.log(name);
    }

    getName();
    return globalVar1 * globalVar2;
}
