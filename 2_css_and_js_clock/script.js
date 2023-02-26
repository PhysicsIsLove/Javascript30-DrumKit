console.log("Connected successfully ");
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

let myElement = document.getElementById("myElement");

// Get the current transform property of the element
let currentTransformHours = window.getComputedStyle(hourHand, null).getPropertyValue('transform');
// let currentTransformMins = window.getComputedStyle(minuteHand).getPropertyValue('transform');
// let currentTransformSecs = window.getComputedStyle(secondHand).getPropertyValue('transform');

// Extract the translate and rotate values from the transform property
// let translateRegex = /translate\((.*?)\)/;
console.log("current transform hours ",  currentTransformHours);
// console.log("regex ", currentTransformHours.match(translateRegex));
// let translateValuesHours = currentTransformHours.match(translateRegex)[1].split(',');
// let translateValuesMins = currentTransformMins.match(translateRegex)[1].split(',');
// let translateValuesSecs = currentTransformSecs.match(translateRegex)[1].split(',');

let hourMatrix = new DOMMatrixReadOnly(hourHand.style.transform);
let minMatrix = new DOMMatrixReadOnly(minuteHand.style.transform);
let secMatrix = new DOMMatrixReadOnly(secondHand.style.transform);

console.log("hour matrix ", hourMatrix);

// let rotateRegex = /rotate\((.*?)\)/;

let intervalId = setInterval(()=>{
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let hrsDeg = (((hrs/12)*360)+90)%360;
    let minsDeg = (((mins/60)*360)+90)%360;
    let secsDeg = (((secs/60)*360)+90)%360;

// Apply the rotation matrix to the current matrix
    let rotationMatrixHour = new DOMMatrixReadOnly();
    let rotationMatrixMinute = new DOMMatrixReadOnly();
    let rotationMatrixSecond = new DOMMatrixReadOnly();
    // debugger
    console.log("before rotation ", rotationMatrixHour);
    rotationMatrixHour.rotate(hrsDeg, 'deg');
    console.log("After rotation ", rotationMatrixHour);
    rotationMatrixMinute.rotate(minsDeg, 'deg');
    rotationMatrixSecond.rotate(secsDeg, 'deg');
    // rotationMatrixHour.rotateSelf(45, "deg");

    console.log("new matrix ", hourMatrix.multiply(rotationMatrixHour).toString());
    hourHand.style.transform = hourMatrix.multiply(rotationMatrixHour).toString();
    minuteHand.style.transform = minMatrix.multiply(rotationMatrixMinute).toString();
    secondHand.style.transform = secMatrix.multiply(rotationMatrixSecond).toString();

    // hourHand.style.transform = `translate(${translateValuesHours[0].trim()}, ${translateValuesHours[1].trim()}) rotate(${hrsDeg}deg)`;
    // minuteHand.style.transform = `translate(${translateValuesMins[0].trim()}, ${translateValuesMins[1].trim()}) rotate(${minsDeg}deg)`;
    // secondHand.style.transform = `translate(${translateValuesSecs[0].trim()}, ${translateValuesSecs[1].trim()}) rotate(${secsDeg}deg)`;

}, 1000);