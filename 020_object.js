let user = {
    name: 'Danila',
    age: 25,
    gender: 'male',
    interests: ['IT', 'JavaScript'],
    greeting: function () {
        console.log('Привет! Меня зовут '
            + this.name)
    }
}

console.log(user.name);
console.log(user.age);
console.log(user.gender);
console.log(user.interests);
user.greeting();

console.log(user);