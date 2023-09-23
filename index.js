let list = document.querySelector(".btn-menu");
let infos = document.querySelector(".infos-item");
let btnModal = document.querySelector('.car-btn');
let carModal = document.querySelector('dialog');
let btnClose = document.querySelector('.btn-close');

btnModal.onclick = function () {
    carModal.showModal();
}

btnClose.onclick = function () {
    carModal.close();
}

let blue = document.querySelector('.color-blue');
    blue.addEventListener("click", () => {
    blue.classList.toggle("Clicked");
})

let red = document.querySelector('.color-red');
    red.addEventListener("click", () => {
    red.classList.toggle("Clicked");
})

let black = document.querySelector('.color-black');
    black.addEventListener("click", () => {
    black.classList.toggle("Clicked");
})

let dish = document.querySelector('.color-dish');
    dish.addEventListener("click", () => {
    dish.classList.toggle("Clicked");
})

let white = document.querySelector('.color-white');
    white.addEventListener("click", () => {
    white.classList.toggle("Clicked");
})

list.addEventListener("click", () => {
    list.classList.toggle("active");
    infos.classList.toggle("active");
});

let btn2020 = document.querySelector('#btn-2020');
    btn2020.addEventListener("click", () => {
    btn2020.classList.toggle("clicked");
})

let btn2021 = document.querySelector('#btn-2021');
    btn2021.addEventListener("click", () => {
    btn2021.classList.toggle("clicked");
})

let btn2022 = document.querySelector('#btn-2022');
    btn2022.addEventListener("click", () => {
    btn2022.classList.toggle("clicked");
})

let btn2023 = document.querySelector('#btn-2023');
    btn2023.addEventListener("click", () => {
    btn2023.classList.toggle("clicked");
})


// Continuar a lógica
let stars = document.querySelectorAll('.star');
let sizeStars = stars.length;
stars.forEach(elemento => {
    elemento.addEventListener("click", ()=>{
        console.log(elemento.outerHTML);
        elemento.classList.toggle("clicked");
        elemento.classList.toggle("star");

    })
});