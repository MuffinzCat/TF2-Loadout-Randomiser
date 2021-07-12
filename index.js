function randomiseButtonHover(){
    document.getElementById("randomiseButton").className = "buttonHover";
}
function randomiseButtonUnHover(){
    document.getElementById("randomiseButton").className = "";
}

function buttonClick() {
    const audio = new Audio('buttonclick.mp3');
    audio.play();
}