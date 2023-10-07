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

 let btnColors = document.querySelectorAll(".colors");
 btnColors.forEach(elemento => {
    let  el = null;
    elemento.addEventListener("click", ()=>{
        clearStyleColors(btnColors);
        elemento.classList.toggle("Clicked")
        
    })
});
let clearStyleColors = (value)=>{
    btn = value;
    btn.forEach(elemento => {
        elemento.classList.remove("Clicked")
    });
}


let btnYears = document.querySelectorAll(".btn-style");
btnYears.forEach(elemento => {
   let  el = null;
   elemento.addEventListener("click", ()=>{
       clearStyleYears(btnYears);
       elemento.classList.toggle("select")
       
   })
});
let clearStyleYears = (value)=>{
   btn = value;
   btn.forEach(elemento => {
       elemento.classList.remove("select")
   });
}



// Continuar a lógica
let stars = document.querySelectorAll("[data-position]");
let lastClick = "firstClick";
let statusActive = false;

stars.forEach((star)=>{
    star.addEventListener("click", ()=>{
        let starIndex = parseInt(Object.values(star.dataset)[0]);
        verifyClick(starIndex, star, lastClick);
    })
})


let verifyClick = (index, star, last)=>{
    if(statusActive && last == index){
        console.log("Verificado")
        activeStars(star);
    }else if(last == "firstClick"){
        activeStars(star);
    }else if(statusActive == false){
        activeStars(star);
    }
}


let activeStars = (starClicked)=>{
    let starIndex = parseInt(Object.values(starClicked.dataset)[0]);
    stars.forEach((star)=>{
        let starIndexGlobal = parseInt(Object.values(star.dataset)[0]);
        if(starIndex >= starIndexGlobal){
            star.classList.toggle("clicked");
            star.classList.toggle("star");
        }
    })
    lastClick = starIndex;
    if(statusActive){
        statusActive = false;
    }else{
        statusActive = true;
    }
    console.log(statusActive)
}


/*
let sizeStars = stars.length;
stars.forEach(elemento => {
    elemento.addEventListener("click", (item)=>{
        elemento.classList.toggle("clicked");
        elemento.classList.toggle("star");

    })
});
*/