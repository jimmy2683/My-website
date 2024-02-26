let a = document.getElementsByClassName("img");
let b = document.querySelector(".container");
let c = document.getElementsByClassName("icons");
let d= document.getElementsByClassName("new");
let p = 0;
// for(let i=0;i<1115;i++){d[i].style = `background-color:rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)});`}
for (let i = 0; i < 5; i++) {
    a[i].style.backgroundImage = `url("images (${i}).jpg")`;
}
for (let i = 0; i < 5; i++) {
    a[i].addEventListener("click", k => {
        b.style.backgroundImage = `url("images (${i}).jpg")`;
        b.style.transition = "background-image 2s ease";
        b.style.backgroundSize = "cover";
        b.style.backgroundRepeat = "no-repeat";
        p = i + 1;
        console.log(p);
        for (let j = 0; j < 5; j++) {
            if (j != i) {
                a[i].style.display = "none";
                a[j].style.translate = "40vw";
                a[j].style.transition = "translate 1s ease"
                a[j].style.zIndex = "5";

            }
        }
        for (let j = 0; j < 5; j++) {
            if (j != i) {
                a[j].style.display = "";
                a[j].style.zIndex = "0";
            }
        }
    })
}

for (let i = 0; i < 5; i++) {
    a[i].addEventListener("dblclick", k => {
        b.style.background = `transparent`;
        b.style.transition = "background-image 1s ease";
        for (let j = 0; j < 5; j++) {
            a[j].style.translate = "0vw";
            a[j].style.transition = "translate 1s ease"
            a[j].style.zIndex = "0";
            a[j].style.display = "";
        }
    })
}
for (let i = 0; i < 2; i++) {
    c[i].style.cursor = "pointer";
}
c[1].addEventListener("click", k => {
    p++;
    if (p == 6) {
        p = 1;
    }
    console.log(p);
    b.style.backgroundImage = `url("images (${p - 1}).jpg")`;
    b.style.transition = "background-image 1s ease";
    b.style.backgroundSize = "contain";
    b.style.backgroundRepeat = "no-repeat";
    if(p==1){
        a[1].style.translate="30vw";
        a[2].style.translate="30vw";
        a[3].style.translate="30vw";
        a[1].style.display="";
        a[2].style.display="";
        a[3].style.display="";
        a[1].style.transition="translate 1s ease";
        a[2].style.transition="translate 1s ease";
        a[3].style.transition="translate 1s ease";
        a[0].style.display="none";
        a[4].style.display="none";
    }
    if(p==2){
        a[2].style.translate="30vw";
        a[3].style.translate="30vw";
        a[4].style.translate="30vw";
        a[2].style.display="";
        a[3].style.display="";
        a[4].style.display="";
        a[2].style.transition="translate 1s ease";
        a[3].style.transition="translate 1s ease";
        a[4].style.transition="translate 1s ease";
        a[0].style.display="none";
        a[1].style.display="none";
    }
    if(p==3){
        a[3].style.translate="30vw";
        a[4].style.translate="30vw";
        a[0].style.translate="30vw";
        a[3].style.display="";
        a[4].style.display="";
        a[0].style.display="";
        a[3].style.transition="translate 1s ease";
        a[4].style.transition="translate 1s ease";
        a[0].style.transition="translate 1s ease";
        a[1].style.display="none";
        a[2].style.display="none";
    }
    if(p==4){
        a[4].style.translate="30vw";
        a[0].style.translate="30vw";
        a[1].style.translate="30vw";
        a[4].style.display="";
        a[0].style.display="";
        a[1].style.display="";
        a[4].style.transition="translate 1s ease";
        a[0].style.transition="translate 1s ease";
        a[1].style.transition="translate 1s ease";
        a[2].style.display="none";
        a[3].style.display="none";
    }
    if(p==5){
        a[0].style.translate="30vw";
        a[1].style.translate="30vw";
        a[2].style.translate="30vw";
        a[0].style.display="";
        a[1].style.display="";
        a[2].style.display="";
        a[0].style.transition="translate 1s ease";
        a[1].style.transition="translate 1s ease";
        a[2].style.transition="translate 1s ease";
        a[3].style.display="none";
        a[4].style.display="none";
    }
})
c[0].addEventListener("click", k => {
    p--;
    console.log(p);
    if (p == 0 || p==-1) {
        p = 5;
    }
    b.style.backgroundImage = `url("images (${p - 1}).jpg")`;
    b.style.transition = "background-image 1s ease";
    b.style.backgroundSize = "contain";
    b.style.backgroundRepeat = "no-repeat";
    if(p==1){
        a[1].style.translate="30vw";
        a[2].style.translate="30vw";
        a[3].style.translate="30vw";
        a[1].style.display="";
        a[2].style.display="";
        a[3].style.display="";
        a[1].style.transition="translate 1s ease";
        a[2].style.transition="translate 1s ease";
        a[3].style.transition="translate 1s ease";
        a[0].style.display="none";
        a[4].style.display="none";
    }
    if(p==2){
        a[2].style.translate="30vw";
        a[3].style.translate="30vw";
        a[4].style.translate="30vw";
        a[2].style.display="";
        a[3].style.display="";
        a[4].style.display="";
        a[2].style.transition="translate 1s ease";
        a[3].style.transition="translate 1s ease";
        a[4].style.transition="translate 1s ease";
        a[0].style.display="none";
        a[1].style.display="none";
    }
    if(p==3){
        a[3].style.translate="30vw";
        a[4].style.translate="30vw";
        a[0].style.translate="30vw";
        a[3].style.display="";
        a[4].style.display="";
        a[0].style.display="";
        a[3].style.transition="translate 1s ease";
        a[4].style.transition="translate 1s ease";
        a[0].style.transition="translate 1s ease";
        a[1].style.display="none";
        a[2].style.display="none";
    }
    if(p==4){
        a[4].style.translate="30vw";
        a[0].style.translate="30vw";
        a[1].style.translate="30vw";
        a[4].style.display="";
        a[0].style.display="";
        a[1].style.display="";
        a[4].style.transition="translate 1s ease";
        a[0].style.transition="translate 1s ease";
        a[1].style.transition="translate 1s ease";
        a[2].style.display="none";
        a[3].style.display="none";
    }
    if(p==5){
        a[0].style.translate="30vw";
        a[1].style.translate="30vw";
        a[2].style.translate="30vw";
        a[0].style.display="";
        a[1].style.display="";
        a[2].style.display="";
        a[0].style.transition="translate 1s ease";
        a[1].style.transition="translate 1s ease";
        a[2].style.transition="translate 1s ease";
        a[3].style.display="none";
        a[4].style.display="none";
    }
})