console.log("JS connected successfully ");
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

let intervalId = setInterval(()=>{
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let hrsDeg = ((((hrs%12)/12)*360)-90) + ((mins/60)%1)*0.5;
    let minsDeg = ((parseFloat(mins/60)*360)-90) + ((secs/60)%1)*6;
    let secsDeg = (((secs/60)*360)-90);

    console.log("hrs deg", hrsDeg);
    console.log("mins deg ", minsDeg);
    secondHand.style.transform = `rotate(${secsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minsDeg}deg)`;
    hourHand.style.transform = `rotate(${hrsDeg}deg)`;

}, 1000);