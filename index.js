let list = document.querySelector(".btn-menu");
let infos = document.querySelector(".infos-item");
let btnModal = document.querySelector('.car-btn');
let btnModalList = document.querySelectorAll('.car-btn');
let carModals = document.querySelectorAll('[data-dialog]');
let btnsClose = document.querySelectorAll('.btn-close');
let dataBtn = document.querySelectorAll("[data-button]");

dataBtn.forEach((item)=>{
    item.onclick = function () {
            let valueBtn = Object.values(item.dataset)[0];
            carModals.forEach((carModel)=>{
                let valueModel = Object.values(carModel.dataset)[0];
                if(valueBtn == valueModel){
                    carModel.showModal();
                }
            })
   }
})

btnsClose.forEach((item)=>{
    item.onclick =  function () {
        carModals.forEach((carModel)=>{
                carModel.close();
        })
    }
})
/*
btnModal.onclick = function ({target}) {
     carModal.showModal();
}

btnClose.onclick = function () {
    carModal.close();
}
*/
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

let btnModelos = document.querySelectorAll(".btn-modelos");
btnModelos.forEach(elemento => {
   let  el = null;
   elemento.addEventListener("click", ()=>{
       clearStyleModelos(btnModelos);
       elemento.classList.toggle("select")
       switch(elemento.value){
            case "SE":
                let priceEvoque = document.querySelector(".car-evoque");
                priceEvoque.innerHTML = `R$ 427.950 <br>Ou até 60x`
            break;
            case "R-dynamic HSE":
                let priceEvoqueDefault = document.querySelector(".car-evoque");
                priceEvoqueDefault.innerHTML = `R$ 459.950 <br>Ou até 60x`
            break;
            case "GP":
                let priceBwm320i = document.querySelector(".car-bmw320i");
                priceBwm320i.innerHTML = `R$ 315.950 <br>Ou até 60x`
            break;
            case "Sport":
                let priceBwm320Default = document.querySelector(".car-bmw320i");
                priceBwm320Default.innerHTML = `R$ 335.950 <br>Ou até 60x`
            break;
            case "Jeep-Sport":
                let priceJeepSportDefault = document.querySelector(".car-jeep-compass");
                priceJeepSportDefault.innerHTML = `R$ 178.590 <br>Ou até 60x`
            break;
            case "Jeep-Longitude":
                let priceJeepLongitudeDefault = document.querySelector(".car-jeep-compass");
                priceJeepLongitudeDefault.innerHTML = `R$ 192.390 <br>Ou até 60x`
            break;
            case "Jeep-Limited":
                let priceJeepLimitedDefault = document.querySelector(".car-jeep-compass");
                priceJeepLimitedDefault.innerHTML = `R$ 215.890 <br>Ou até 60x`
            break;
            case "Jeep-SérieS":
                let priceJeepSérieSDefault = document.querySelector(".car-jeep-compass");
                priceJeepSérieSDefault.innerHTML = `R$ 230.990 <br>Ou até 60x`
            break;
            case "Jeep-Trailhawk":
                let priceJeepTrailhawkDefault = document.querySelector(".car-jeep-compass");
                priceJeepTrailhawkDefault.innerHTML = `R$ 260.490 <br>Ou até 60x`
            break;
            case "Jmercedes-GLB-progressive":
                let pricemercedesGLBProgressiveDefault = document.querySelector(".car-mercedes-GLB");
                pricemercedesGLBProgressiveDefault.innerHTML = `R$ 386.900 <br>Ou até 60x`
            break;
            case "mercedes-GLB-AMG":
                let pricemercedesGLBAMGDefault = document.querySelector(".car-mercedes-GLB");
                pricemercedesGLBAMGDefault.innerHTML = `R$ 532.900 <br>Ou até 60x`
            break;
            case "BMW-X1-GP":
                let priceBMWX1GPDefault = document.querySelector(".car-BMW-X1");
                priceBMWX1GPDefault.innerHTML = `R$ 299.950 <br>Ou até 60x`
            break;
            case "BMW-X1-X-line":
                let priceBMWX1XLineDefault = document.querySelector(".car-BMW-X1");
                priceBMWX1XLineDefault.innerHTML = `R$ 330.950 <br>Ou até 60x`
            break;
            case "BMW-X1-M-Sport":
                let priceBMWX1XMSportDefault = document.querySelector(".car-BMW-X1");
                priceBMWX1XMSportDefault.innerHTML = `R$ 350.950 <br>Ou até 60x`
            break;
       }
       //changePrice();
   })
});
let clearStyleModelos = (value)=>{          
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