let options = document.querySelector(".options");
let optbutton = document.querySelector("header .mainopt > li:last-child");
let images = document.getElementsByClassName("icon");
let imgbutton = document.getElementsByClassName("button");
let cyclingguy = document.querySelector(".cyclingguy");

let optopen = false;
optbutton.addEventListener('click', k => {
        if (optopen == false) {
                options.style.display = "block";
                optbutton.style.translate = "150px";
                optopen = true;
        }
        else {
                options.style.display = "none";
                optbutton.style.translate = "0px";
                optopen = false;
        }
})

for (let i = 0; i < 7; i++) {
        imgbutton[i].addEventListener('mouseover', k => {
                images[i].style.zIndex = '100'
                let cycling = ` @keyframes cycling${i} {
                        0% {
                            transform: rotate(0) translate(calc((max(-80vh, -80vw))/2 - 40px)) rotateY(180deg) rotateZ(100deg);
                        }
                
                        100% {
                            transform: rotate(${15 + 25 * i}deg) translate(calc((max(-80vh, -80vw))/2 - 40px)) rotateY(180deg) rotateZ(100deg);
                        }
                    }`;
                let styleSheet = document.styleSheets[0];
                styleSheet.insertRule(cycling, 0);
                cyclingguy.style.animation = `cycling${i} ${i/1.5}s linear 1 forwards`
        })
        imgbutton[i].addEventListener('mouseout', k => {
                images[i].style.zIndex = `${i + 2}`
        })
}