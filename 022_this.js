let user = {
    name: 'Danila',
    greeting: function () {
        console.log('Hello ' + this.name)
    }
}

let user1 = {
    name: 'Regina',
    greeting: function () {
        console.log('Hello ' + this.name)
    }
}

user.greeting();
user1.greeting();