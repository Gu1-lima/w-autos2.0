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

