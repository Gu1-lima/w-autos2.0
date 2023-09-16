let list = document.querySelector(".btn-menu");
let infos = document.querySelector(".infos-item");
let btnModal = document.querySelector('.car-btn');
let carModal = document.querySelector('dialog')

btnModal.onclick = function (){
    carModal.showModal();
}

list.addEventListener("click", ()=>{
    list.classList.toggle("active");
    infos.classList.toggle("active");
})