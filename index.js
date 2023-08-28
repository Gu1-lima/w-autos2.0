let list = document.querySelector(".btn-menu");
let infos = document.querySelector(".infos-item");

list.addEventListener("click", ()=>{
    list.classList.toggle("active");
    infos.classList.toggle("active");
})