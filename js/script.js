{
    const welcome = () => {
        console.log("Cześć!")
    }

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".body")
        body.classList.toggle("darkTheme");
        themeButton.innerText = body.classList.contains("darkTheme") ? "Jasny motyw" : "Ciemny motyw";
    };

    const onHideImageClick = () => {
        const header__image = document.querySelector(".header__image");
        header__image.classList.toggle("display");
        button.innerText = header__image.classList.contains("display") ? "Pokaż zdjęcie" : "Schowaj zdjęcie";
    };

    const init = () => {
        const button = document.querySelector(".button");
        const themeButton = document.querySelector(".themeButton");

        button.addEventListener("click", onHideImageClick);

        themeButton.addEventListener("click", onChangeBackgroundClick);

        welcome();
    };
    init();
}