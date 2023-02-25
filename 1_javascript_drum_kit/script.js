console.log("Connected successsfully");

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

function onKeyUp(event){
    console.log("inside the key up function")
    let keyPressed = event.code;
    keyPressed = keyPressed.slice(keyPressed.length - 1, keyPressed.length);
    updateTheStyle(keyPressed, false);
    stopSound(keyPressed);
}

function onKeyDown(event){
    console.log("On key rpess ", event);
    let keyPressed = event.code;
    keyPressed = keyPressed.slice(keyPressed.length - 1, keyPressed.length);
    console.log("The final keypress is ", keyPressed);
    // get the element whose content is that letter
    updateTheStyle(keyPressed, true);
    playSound(keyPressed);
}

function updateTheStyle(keyName, add){
    const key = document.getElementById("key" + keyName);
    if(add){        
        key.classList.add("playing");
    } else{
        key.classList.remove("playing");
    }
    
}

function playSound(keyName){
    const audioELement = document.getElementById("sound" + keyName);
    audioELement.play();
}

function stopSound(keyName){
    const audioELement = document.getElementById("sound" + keyName);
    audioELement.pause();
    audioELement.currentTime = 0;
}