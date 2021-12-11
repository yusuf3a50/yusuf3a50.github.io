function darkModeFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }
  let darkModeButton = document.querySelector(".darkModeButton");
  darkModeButton.addEventListener("click", darkModeFunction);
  
  function buttonFunction() {
    console.log("Please pick me for your course!")
};
let clickMeButton = document.querySelector(".button");
clickMeButton.addEventListener("click", buttonFunction);