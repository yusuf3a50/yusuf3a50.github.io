//Dark mode button//
function darkModeFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }

let darkModeButton = document.querySelector(".darkModeButton");
darkModeButton.addEventListener("click", darkModeFunction);

//Answer to the meaning of life, the universe and everything button//
function buttonFunction() {
  let answer = document.getElementById("answer42")
  document.getElementById("answer42").innerText = 42
};

let clickMeButton = document.querySelector(".questionButton");
clickMeButton.addEventListener("click", buttonFunction);