const persons = [
    {name: "Abhishek", id:12},
    {name: "Suraj", id:19},
    {name: "Aditya", id:13},
    {name: "Rishabh", id:89}
]

const button = document.querySelector("button");
function makeBtnGreen($event){
    button.style.color = 'green';
    button.style.fontSize = '24px';
}

// If you want to check where any attribute is getting modified we can put a breakpoint in the html itself, Open inspect window, select the element right click and put a breakpoint on the Attribute modification by selecting the Break on option in the context menu

console.log("===Clear===");
console.clear();
console.log("console.clear(); command cleared everything");

console.log("TYPES OF CONSOLE LOGS");

console.log("===Regular===");
console.log("Regular");

console.log("===Interpolated===");
console.log("My name is %s Anand", "Abhishek");

console.log("===Styled Text===");
console.log("%c Styled text", 'font-size:18px; color:lightblue; background:navyblue');

console.log("===Warning===");
console.warn("Warning");

console.log("===Info===");
console.info("Info");

console.log("===Error===");
console.error("Error");

console.log("===Assert===");
console.log("It will only fire if something is wrong");
console.assert(1===2, "the assertion was wrong");

console.log("===DIR===");
console.log("If we want to view all the properties and methods on a DOM element we can use the console.dir on it. Using the console.log will simply print that element to the console without the complete information about itself");
console.log("Printing button using log");
console.log(button);
console.log("Printing button using dir");
console.dir(button);

console.log("===Grouping together===");
console.log("Note that you need to start with console.group() and end with console.groupEnd, the thing inside should be the same in both")
persons.forEach(person =>{
    console.group(person.name);
    console.log("Name of the person ", person.name);
    console.log("Age of the person ",person.id);
    console.groupEnd(person.name);
})
console.log("We can also do console.groupCollapsed");
persons.forEach(person =>{
    console.groupCollapsed(person.name);
    console.log("Name of the person ", person.name);
    console.log("Age of the person ",person.id);
    console.groupEnd(person.name);
})


console.log("===Counting===");
console.count("hey");
console.count("hey");
console.count("hey");
console.count("there");
console.count("hey");
console.count("hey");
console.count("there");
console.count("there");

console.log("===TIMING===");
console.log("Seeing how much time does some operation take. Useful for seeing API requests time");
console.time("Loop");
let sum = 0
for(let i=1; i< 100000; i++){
    sum += 1;
}
console.timeEnd("Loop");



