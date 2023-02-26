document.addEventListener("keydown", onKeyDown);
// document.addEventListener("keyup", onKeyUp);

const keys = document.querySelectorAll('.key');
console.log("jkeys", keys);
keys.forEach(key => {
    console.log(key);
    key.addEventListener("transitionend", onTransitionEnd)
});

function onTransitionEnd(event){
    if(event.propertyName == "transform"){
        event.target.classList.remove("playing");
    } else{
        return;
    }
    // console.log("transition end property event" , event);
}

// function onKeyUp(event){
//     let keyPressed = event.code;
//     keyPressed = keyPressed.slice(keyPressed.length - 1, keyPressed.length);
//     document.getElementById("key" + keyPressed).classList.remove("playing");
// }

function onKeyDown(event){
    let keyPressed = event.code;
    keyPressed = keyPressed.slice(keyPressed.length - 1, keyPressed.length);
    document.getElementById("key" + keyPressed).classList.add("playing");
    playSound(keyPressed);
}

function playSound(keyName){
    const audioELement = document.getElementById("sound" + keyName);
    audioELement.currentTime = 0;
    audioELement.play();
}

