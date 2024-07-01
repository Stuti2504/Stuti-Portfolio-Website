function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/*const typingAnimationElement = document.getElementById("typing-animation");
const typingTexts = ["AI  ", "Machine Learning  ", "Data Science   "];
for (let i = 0; i < text.length; i++) {
  setTimeout(() => {
    typingAnimationElement.textContent += text[i];
  }, i * 200);
  setTimeout(() => {
    typingAnimationElement.textContent = "";
    playTypingAnimation(
      typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]
    );
  }, text.length * 200);
}
playTypingAnimation(typingTexts[0]);
var typed = new Typed("#typing-animation", {
  strings: ["ML", "AI", "Data Analysis"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});*/

document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  var dataText = [
    "Data Analysis",
    "Data Cleaning",
    "Data Manipulation.",
    "Data Visualization",
    "Data Story Telling!",
  ];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.getElementById("typing-animation").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
