//array of objects
const fruits = [{name: "apple", color: "red", calories: "95"},
                {name: "orange", color: "orange", calories: "45"},
                {name: "banana", color: "yellow", calories: "105"},
                {name: "coconut", color: "white", calories: "159"},
                {name: "pineapple", color: "yellow", calories: "37"}]

console.log(fruits[0].calories); //access

fruits.push({name: "grapes", color:"purple", calories:"62"}); //add an object
console.log(fruits);

fruits.pop();//remove an object in the array
console.log(fruits);

fruits.splice(1,2); //remove elements at their indexes
console.log(fruits);

//loops...forEach()....
fruits.forEach(fruits => console.log(fruits.name));

//...map()...
const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitCalories);

//.....filter()..... returns a new array 
const lowCalories = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCalories);

//....reduce()... returns a single value
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxFruit);

const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);
console.log(minFruit)