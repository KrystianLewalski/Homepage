console.log("Cześć!")

let button = document.querySelector(".button");
let header__image = document.querySelector(".header__image");
let themeButton = document.querySelector(".themeButton");
let body = document.querySelector(".body")

button.addEventListener("click", () => {
    header__image.classList.toggle("display");

    button.innerText = header__image.classList.contains("display") ? "Pokaż zdjęcie" : "Schowaj zdjęcie";
});

themeButton.addEventListener("click", () => {
    body.classList.toggle("darkTheme");

    themeButton.innerText = body.classList.contains("darkTheme") ? "Jasny motyw" : "Ciemny motyw";
});