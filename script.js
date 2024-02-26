let moveearth = document.querySelector(".container .firstpa .first3 img");
let text = document.querySelector(".container .firstpa .first footer");
let menubutton = document.querySelector(".container .first header .mainopt li:last-child");
let optionlist = document.querySelector(".container .first header .mainopt > li:last-child .options");
let options = document.querySelector(".container .first header .mainopt li");

window.addEventListener('scroll', k => {
    let value = window.scrollY;
    moveearth.style.translate = `-${1.5 * value}px`;
    text.style.translate = `${0.25 * value}vw`;
})
let menu = 0;
menubutton.addEventListener('click', k=>{
    if(menu==0){
        optionlist.style.display = "block";
        let marq = document.getElementsByClassName("marquee");
        marq[0].style.transform = "translateY(-200px)";
        marq[1].style.transform = "translateY(-200px)";
        marq[0].style.display = "none";
        marq[1].style.display = "none";
        menubutton.style.translate="113px";
        menu = 1;
    }else {
        
            optionlist.style.display = "none";
            let marq = document.getElementsByClassName("marquee");
            marq[0].style.transform = "translateY(0px)";
            marq[1].style.transform = "translateY(0px)";
            marq[0].style.display = "";
            marq[1].style.display = "";
            menubutton.style.translate="0";
            menu = 0;
        
    }
})

