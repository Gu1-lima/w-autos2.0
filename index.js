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
                let nomeEvoqueSE = document.querySelector(".evoque");
                nomeEvoqueSE.innerHTML = `Range Rouver Evoque: SE`

                let priceEvoque = document.querySelector(".car-evoque");
                priceEvoque.innerHTML = `R$ 427.950 <br>Ou até 60x`
            break;
            case "R-dynamic HSE":
                let priceEvoqueDefault = document.querySelector(".car-evoque");
                priceEvoqueDefault.innerHTML = `R$ 459.950 <br>Ou até 60x`

                let nomeEvoqueHSE = document.querySelector(".evoque");
                nomeEvoqueHSE.innerHTML = `Range Rouver Evoque: HSE`
            break;
            case "GP":
                let priceBwm320i = document.querySelector(".car-bmw320i");
                priceBwm320i.innerHTML = `R$ 315.950 <br>Ou até 60x`

                let Bwm320iGP = document.querySelector(".car-bmw320i");
                Bwm320iGP.innerHTML = `BMW-320i: GP`
            break;
            case "Sport":
                let priceBwm320Default = document.querySelector(".car-bmw320i");
                priceBwm320Default.innerHTML = `R$ 335.950 <br>Ou até 60x`

                let Bwm320iSport = document.querySelector(".car-bmw320i");
                Bwm320iSport.innerHTML = `BMW-320i: Sport`
            break;
            case "Padrao":
                let lamborghiniUrus = document.querySelector(".car-lamborghini-urus");
                lamborghiniUrus.innerHTML = `R$ 1.347.356 <br>Ou até 60x`
            break;
            case "Jeep-Sport":
                let priceJeepSportDefault = document.querySelector(".car-jeep-compass");
                priceJeepSportDefault.innerHTML = `R$ 178.590 <br>Ou até 60x`

                let jeepCompass = document.querySelector(".jeep-compass");
                jeepCompass.innerHTML = `=Jeep Compass: Sport`
            break;
            case "Jeep-Longitude":
                let priceJeepLongitudeDefault = document.querySelector(".car-jeep-compass");
                priceJeepLongitudeDefault.innerHTML = `R$ 192.390 <br>Ou até 60x`

                let jeepCompassLongitude = document.querySelector(".jeep-compass");
                jeepCompassLongitude.innerHTML = `Jeeo Compass: Longitude`
            break;
            case "Jeep-Limited":
                let priceJeepLimitedDefault = document.querySelector(".car-jeep-compass");
                priceJeepLimitedDefault.innerHTML = `R$ 215.890 <br>Ou até 60x`

                let jeepCompassLimited = document.querySelector(".jeep-compass");
                jeepCompassLimited.innerHTML = `Jeeo Compass: Limited`
            break;
            case "Jeep-SérieS":
                let priceJeepSérieSDefault = document.querySelector(".car-jeep-compass");
                priceJeepSérieSDefault.innerHTML = `R$ 230.990 <br>Ou até 60x`

                let jeepCompassSérieS = document.querySelector(".jeep-compass");
                jeepCompassSérieS.innerHTML = `Jeeo Compass: Série S`
            break;
            case "Jeep-Trailhawk":
                let priceJeepTrailhawkDefault = document.querySelector(".car-jeep-compass");
                priceJeepTrailhawkDefault.innerHTML = `R$ 260.490 <br>Ou até 60x`

                let jeepCompassTrailhawk = document.querySelector(".jeep-compass");
                jeepCompassTrailhawk.innerHTML = `Jeeo Compass: Trailhawk`
            break;
            case "mercedes-GLB-progressive":
                let pricemercedesGLBProgressiveDefault = document.querySelector(".car-mercedes-GLB");
                pricemercedesGLBProgressiveDefault.innerHTML = `R$ 386.900 <br>Ou até 60x`

                let mercedesGLBprogressive = document.querySelector(".mercedes-GLB");
                mercedesGLBprogressive.innerHTML = `Mercedes GLB: Progressive`
            break;
            case "mercedes-GLB-AMG":
                let pricemercedesGLBAMG = document.querySelector(".car-mercedes-GLB");
                pricemercedesGLBAMG.innerHTML = `R$ 532.900 <br>Ou até 60x`

                let mercedesGLBAMG = document.querySelector(".mercedes-GLB");
                mercedesGLBAMG.innerHTML = `Mercedes GLB: AMG`
            break;
            case "BMW-X1-GP":
                let priceBMWX1GPDefault = document.querySelector(".car-BMW-X1");
                priceBMWX1GPDefault.innerHTML = `R$ 299.950 <br>Ou até 60x`

                let BmwX1 = document.querySelector(".BMW-X1");
                BmwX1.innerHTML = `BMW-X1: GP`
            break;
            case "BMW-X1-X-line":
                let priceBMWX1XLineDefault = document.querySelector(".car-BMW-X1");
                priceBMWX1XLineDefault.innerHTML = `R$ 330.950 <br>Ou até 60x`

                let BmwX1Line = document.querySelector(".BMW-X1");
                BmwX1Line.innerHTML = `BMW-X1: Line`
            break;
            case "BMW-X1-M-Sport":
                let priceBMWX1XMSportDefault = document.querySelector(".car-BMW-X1");
                priceBMWX1XMSportDefault.innerHTML = `R$ 350.950 <br>Ou até 60x`

                let BmwX1MSport = document.querySelector(".BMW-X1");
                BmwX1MSport.innerHTML = `BMW-X1: M-Sport`
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