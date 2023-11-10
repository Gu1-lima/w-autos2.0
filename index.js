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

let shoppingCartDefault = ()=>{
    let img = document.querySelector(".car-img");
    let name = document.querySelector(".produto-carrinho-nome");
    let price = document.querySelector(".price");
    let version = document.querySelector(".version");
    let color = document.querySelector(".color");

    /*Update info */

    img.setAttribute("src", "");
    name.innerHTML = `Carrinho vazio`;
    price.innerHTML = ``;
    version.innerHTML = ``;
    color.innerHTML = ``;
}
shoppingCartDefault();

let shoppingCartUpdate = ()=>{
    let btns = document.querySelectorAll(".car-modal-btn");
    btns.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            let img = document.querySelector(".car-img");
            let name = document.querySelector(".produto-carrinho-nome");
            let price = document.querySelector(".price");
            let version = document.querySelector(".version");
            let color = document.querySelector(".color");
    
            /*Update info */
    
            let dataName = localStorage.getItem("name");
            let dataPrice = localStorage.getItem("price");
            let dataVersion = localStorage.getItem("version");
            let dataColor = localStorage.getItem("color");
            let newColor = "";
            switch(dataColor){
                case 'color-black':
                    newColor = "Preto";
                break;
                case 'color-white':
                    newColor = "Branco";
                break;
                case 'color-dish':
                    newColor = "Prata";
                break;
                case 'color-red':
                    newColor = "Vermelho";
                break;
                case 'color-blue':
                    newColor = "Azul";
                break;
            }
            name.innerHTML = `${dataName}`;
            price.innerHTML = `<b>Preço:</b> ${dataPrice}`;
            version.innerHTML = `<b>Versão:</b> ${dataVersion}`;
            color.innerHTML = `<b>Cor:</b> ${newColor}`;
            
            switch(dataName){
                case "Range Rouver Evoque":
                    img.setAttribute("src", "./assets/evoque.svg");
                break;
                case "BMW-320i":
                    img.setAttribute("src", "./assets/BMW-320i.svg");
                break;
                case "Lamborghini Urus":
                    img.setAttribute("src", "./assets/lambor.svg");
                break;
                case "Jeep Compass":
                    img.setAttribute("src", "./assets/jeep-compass.svg");
                break;
                case "Mercedes GLB":
                    img.setAttribute("src", "./assets/mercedes-GLB.svg");
                break;
                case "BMW-X1":
                    img.setAttribute("src", "./assets/bmw-x1 (2).svg");
                break;
            }
        
        })
    })
}
shoppingCartUpdate();

/*
btnModal.onclick = function ({target}) {
     carModal.showModal();
}

btnClose.onclick = function () {
    carModal.close();
}
*/

/* Itens cicados ou selecionados */

 let btnColors = document.querySelectorAll(".colors");
 btnColors.forEach(elemento => {
    let  el = null;
    elemento.addEventListener("click", ()=>{
        clearStyleColors(btnColors);
        localStorage.setItem("color", elemento.classList[0] );
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
       localStorage.setItem("year", elemento.innerHTML);
       elemento.classList.toggle("select")
       
   })
});
let clearStyleYears = (value)=>{
   btn = value;
   btn.forEach(elemento => {
       elemento.classList.remove("select")
   });
}

/* Modelos dos carros */

let btnModelos = document.querySelectorAll(".btn-modelos");
btnModelos.forEach(elemento => {
   let  el = null;
   elemento.addEventListener("click", ()=>{
       clearStyleModelos(btnModelos);
       elemento.classList.toggle("select")
       localStorage.setItem("version", elemento.innerHTML);
       switch(elemento.value){
            case "SE":
                let nomeEvoqueSE = document.querySelector(".evoque");
                nomeEvoqueSE.innerHTML = `Range Rouver Evoque: SE`
                localStorage.setItem("name", `Range Rouver Evoque`);
                let priceEvoque = document.querySelector(".car-evoque");
                priceEvoque.innerHTML = `R$ 427.950 <br>Ou até 60x`;
                localStorage.setItem("price", `R$ 427.950`);
            break;
            case "R-dynamic HSE":
                let priceEvoqueDefault = document.querySelector(".car-evoque");
                priceEvoqueDefault.innerHTML = `R$ 459.950 <br>Ou até 60x`
                localStorage.setItem("price", `R$ 459.950`);
                let nomeEvoqueHSE = document.querySelector(".evoque");
                nomeEvoqueHSE.innerHTML = `Range Rouver Evoque: HSE`
                localStorage.setItem("name", `Range Rouver Evoque`);
            break;
            case "GP":
                let priceBwm320i = document.querySelector(".bmw-320i");
                priceBwm320i.innerHTML = `R$ 315.950 <br>Ou até 60x`
                localStorage.setItem("price", `R$ 315.950`);
                let Bwm320iGP = document.querySelector(".car-bmw320i");
                Bwm320iGP.innerHTML = `BMW-320i: GP`
                localStorage.setItem("name", `BMW-320i`);
            break;
            case "Sport":
                let priceBwm320Default = document.querySelector(".bmw-320i");
                priceBwm320Default.innerHTML = `R$ 335.950 <br>Ou até 60x`;
                localStorage.setItem("price", `R$ 335.950`);
                let Bwm320iSport = document.querySelector(".car-bmw320i");
                Bwm320iSport.innerHTML = `BMW-320i: Sport`
                localStorage.setItem("name", `BMW-320i`);
            break;
            case "Padrao":
                let lamborghiniUrus = document.querySelector(".car-lamborghini-urus");
                localStorage.setItem("name",  `Lamborghini Urus`);
                lamborghiniUrus.innerHTML = `R$ 1.347.356 <br>Ou até 60x`
                localStorage.setItem("price", `R$ 1.347.356`);
            break;
            case "Jeep-Sport":
                let priceJeepSportDefault = document.querySelector(".car-jeep-compass");
                priceJeepSportDefault.innerHTML = `R$ 178.590 <br>Ou até 60x`
                localStorage.setItem("price", `R$ 178.590`);
                let jeepCompass = document.querySelector(".jeep-compass");
                jeepCompass.innerHTML = `Jeep Compass: Sport`
                localStorage.setItem("name",  `Jeep Compass`);
            break;
            case "Jeep-Longitude":
                let priceJeepLongitudeDefault = document.querySelector(".car-jeep-compass");
                priceJeepLongitudeDefault.innerHTML = `R$ 192.390 <br>Ou até 60x`
                localStorage.setItem("price", `R$ 192.390`);
                let jeepCompassLongitude = document.querySelector(".jeep-compass");
                jeepCompassLongitude.innerHTML = `Jeeo Compass: Longitude`
                localStorage.setItem("name",  `Jeep Compass`);
            break;
            case "Jeep-Limited":
                let priceJeepLimitedDefault = document.querySelector(".car-jeep-compass");
                priceJeepLimitedDefault.innerHTML = `R$ 215.890 <br>Ou até 60x`
                localStorage.setItem("price", `R$ 215.890`);
                let jeepCompassLimited = document.querySelector(".jeep-compass");
                jeepCompassLimited.innerHTML = `Jeeo Compass: Limited`;
                localStorage.setItem("name",  `Jeep Compass`);
            break;
            case "Jeep-SérieS":
                let priceJeepSérieSDefault = document.querySelector(".car-jeep-compass");
                priceJeepSérieSDefault.innerHTML = `R$ 230.990 <br>Ou até 60x`
                localStorage.setItem("price", `R$ 230.990`);
                let jeepCompassSérieS = document.querySelector(".jeep-compass");
                jeepCompassSérieS.innerHTML = `Jeeo Compass: Série S`;
                localStorage.setItem("name",  `Jeep Compass`);
            break;
            case "Jeep-Trailhawk":
                let priceJeepTrailhawkDefault = document.querySelector(".car-jeep-compass");
                priceJeepTrailhawkDefault.innerHTML = `R$ 260.490 <br>Ou até 60x`
                localStorage.setItem("price", `R$ 260.490`);
                let jeepCompassTrailhawk = document.querySelector(".jeep-compass");
                jeepCompassTrailhawk.innerHTML = `Jeeo Compass: Trailhawk`
                localStorage.setItem("name",  `Jeep Compass`);
            break;
            case "mercedes-GLB-progressive":
                let pricemercedesGLBProgressiveDefault = document.querySelector(".car-mercedes-GLB");
                pricemercedesGLBProgressiveDefault.innerHTML = `R$ 386.900 <br>Ou até 60x`
                localStorage.setItem("price", `R$ 386.900`);
                let mercedesGLBprogressive = document.querySelector(".mercedes-GLB");
                mercedesGLBprogressive.innerHTML = `Mercedes GLB: Progressive`
                localStorage.setItem("name",  `Mercedes GLB`);
            break;
            case "mercedes-GLB-AMG":
                let pricemercedesGLBAMG = document.querySelector(".car-mercedes-GLB");
                pricemercedesGLBAMG.innerHTML = `R$ 532.900 <br>Ou até 60x`
                localStorage.setItem("price", `R$ 532.900`);
                let mercedesGLBAMG = document.querySelector(".mercedes-GLB");
                mercedesGLBAMG.innerHTML = `Mercedes GLB: AMG`
                localStorage.setItem("name",  `Mercedes GLB`);
            break;
            case "BMW-X1-GP":
                let priceBMWX1GPDefault = document.querySelector(".car-BMW-X1");
                priceBMWX1GPDefault.innerHTML = `R$ 299.950 <br>Ou até 60x`
                localStorage.setItem("price", `R$ 299.950`);
                let BmwX1 = document.querySelector(".BMW-X1");
                BmwX1.innerHTML = `BMW-X1: GP`
                localStorage.setItem("name",  `BMW-X1`);
            break;
            case "BMW-X1-X-line":
                let priceBMWX1XLineDefault = document.querySelector(".car-BMW-X1");
                priceBMWX1XLineDefault.innerHTML = `R$ 330.950 <br>Ou até 60x`
                localStorage.setItem("price", `R$ 330.950`);
                let BmwX1Line = document.querySelector(".BMW-X1");
                BmwX1Line.innerHTML = `BMW-X1: Line`;
                localStorage.setItem("name",  `BMW-X1`);
            break;
            case "BMW-X1-M-Sport":
                let priceBMWX1XMSportDefault = document.querySelector(".car-BMW-X1");
                priceBMWX1XMSportDefault.innerHTML = `R$ 350.950 <br>Ou até 60x`
                localStorage.setItem("price", `R$ 350.950`);
                let BmwX1MSport = document.querySelector(".BMW-X1");
                BmwX1MSport.innerHTML = `BMW-X1: M-Sport`;
                localStorage.setItem("name",  `BMW-X1`);
            break;
       }
       //changePrice();
   })
});

/* Avaliação dos carros/produtos = estrelas */

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
