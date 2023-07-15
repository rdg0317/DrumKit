
const numberOfButtons = document.querySelectorAll(".drum").length
const addAnimations = (key) => {
   activeButton = document.querySelector("." + key)
   activeButton.classList.add("pressed")
   setTimeout(function () {
      activeButton.classList.remove("pressed");
   }, 200);
}
const makeSound = (key) => {
   switch (key) {
      case "w":

         const audio = new Audio("./sounds/tom-1.mp3")
         audio.play()
         break;
      case "l":
         new Audio("sounds/kick-bass.mp3").play()
         break;
      case "a":
         new Audio("sounds/tom-2.mp3").play()
         break;
      case "s":
         new Audio("sounds/tom-3.mp3").play()
         break;
      case "d":
         new Audio("sounds/tom-4.mp3").play()
         break;
      case "j":
         new Audio("sounds/snare.mp3").play()
         break;
      case "k":
         new Audio("sounds/crash.mp3").play()
         break;
      default: console.log(key)
         break;
   }
}
for (i = 0; i < numberOfButtons; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("keypress", function (e) {
      const Key = e.key;
      console.log(e);
      makeSound(Key);
      addAnimations(Key);
   })
}
   
for (i = 0; i < numberOfButtons; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      const key = this.innerHTML;
      makeSound(key);
      addAnimations(key);
   })
}





document.querySelector("#tune1").addEventListener("click", function () {
   console.log("Playing tune 1");

   function playSound(letter, delay) {
      setTimeout(function () {
         makeSound(letter);
      }, delay);
   }

   playSound("w", 0);
   playSound("d", 150);
   playSound("s", 300);
   playSound("a", 450);
   playSound("l", 600);
});

document.querySelector("#tune2").addEventListener("click", function () {
   console.log("Playing tune 1");

   function playSound(letter, delay) {
      setTimeout(function () {
         makeSound(letter);
      }, delay);
   }

   playSound("w", 0);
   playSound("d", 150);
   playSound("w", 300);
   playSound("d", 450);
   playSound("l", 600);
   playSound("s", 750);
});