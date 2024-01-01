function generatePoem(event) {
event.preventDefault();

new Typewriter("#poem", {
    strings: "Brown eyes, question upon questions",
    autoStart: true,
    cursor: "",
    delay: 5,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

