function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
        strings: ["Der du von dem Himmel bist"],
        autoStart: true,
        delay: 1,
        cursor: "",
      });

    poemElement.innerHTML = "Der du von dem Himmel bist"; 
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);