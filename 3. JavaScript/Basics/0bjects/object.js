//object = A collection of related properties and/or methods
//         Can represent real world objects(people, products, places)
//         object = {key : value, function()}

const person = {
    firstName: 'Spongebob',
    LastName: 'Squarepants',
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi, I am Spongebob")},
};
//accessing objects
console.log(person.firstName);
console.log(person.LastName);
console.log(person.age);
console.log(person.isEmployed);

const person2 = {
    firstName: 'Patrick',
    LastName: 'Star',
    age: 42,
    isEmployed: false,
    sayHello: function(){console.log("Hi, I am Patrick")},
};
console.log(person2.firstName);
console.log(person2.LastName);
console.log(person2.age);
console.log(person2.isEmployed);

person.sayHello();
person2.sayHello();