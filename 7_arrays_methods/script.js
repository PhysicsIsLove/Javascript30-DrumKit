const persons = [
    {name: "Abhishek", id:12},
    {name: "Suraj", id:19},
    {name: "Aditya", id:13},
    {name: "Rishabh", id:89}
]

console.table(persons);

let isAdult = persons.some(person => person.id > 18);
console.log({isAdult});

let areAllAdults = persons.every(person => person.id > 18);
console.log({areAllAdults});

let adultIndex = persons.findIndex(person => person.id > 18);
console.log({adultIndex});

let adult = persons.find(person => person.id > 18);
console.log({adult});


console.log("After slicing");
persons.slice(adultIndex, adultIndex+1);
console.table(persons);         // it returns a copy of the array with the change made

console.log("After splicing");
persons.splice(adultIndex, 1); // it makes the change to the array
console.table(persons);

let newPersons = [...persons.slice(0,adultIndex), ...persons.slice(adultIndex+1)];
console.log("New persons");
console.table(newPersons)