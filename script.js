const buttons = document.querySelectorAll(".buttons");
const sounds = document.querySelectorAll(".sound");
const colors = [
    "rgb(64, 217, 255)",
    "rgb(255, 137, 69)",
    "rgb(228, 91, 255)",
    "rgb(255, 252, 97)",
    "rgb(64, 255, 182)",
    "rgb(255, 95, 95)"
]

buttons.forEach((button, index)=>{
    button.addEventListener("click",function(){
        sounds[index].currentTime = 0;
        sounds[index].play();
        createAnimation(index,buttons);
        
    })
    console.log(button);
})

function createAnimation(index,buttons){
    const box = document.createElement("div");
    buttons[index].appendChild(box);
    box.style.background = colors[index];
    box.style.animation = "press 1s linear";
    box.addEventListener("animationend",function(){
        buttons[index].removeChild(box);
    })
}