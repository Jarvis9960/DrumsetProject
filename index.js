var numerOfButton = document.querySelectorAll(".drum").length;
//  Creating sound from click;
for (var i = 0; i < numerOfButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);

  function handleClick() {

    var buttonPressed = this.innerHTML;

    makeSound(buttonPressed);

    makeAnimation(buttonPressed);

    }
  }
// creating sound from keyboard key;

document.addEventListener("keydown", keyboardPress);

function keyboardPress() {

     makeSound(event.key);

     makeAnimation(event.key);
}


  function makeSound(key) {
    switch (key) {
      case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "a":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      default:
        alert("Not a valid source");

  }
}

function makeAnimation(currentkey) {
    var btnpressed = document.querySelector("." + currentkey);
    btnpressed.classList.add("pressed");

    setTimeout(function () {
      btnpressed.classList.remove("pressed");
    },100);

}






// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
