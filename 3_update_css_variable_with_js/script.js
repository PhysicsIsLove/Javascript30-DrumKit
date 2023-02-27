const image = document.getElementById("image");

const inputs = document.querySelectorAll("input");

inputs.forEach(input => input.addEventListener('input', onInputChange));

function onInputChange(event){
    let id = event.target.id;
    let value= event.target.value;
    let propertyName;
    switch(id){
        case "color-input":
            propertyName = "--base-color";
            break;
        case "blur-input":
            propertyName = "--base-blur";
            value = `blur(${value}px)`;
            break;
        case "padding-input":
            propertyName = "--base-padding";
            value += "px";
            break;
        default:
            propertyName = "";
    }
    console.log("propertyName ", propertyName, "value ", value);
    document.documentElement.style.setProperty(propertyName, value);
}


