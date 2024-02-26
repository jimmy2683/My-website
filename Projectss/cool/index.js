let a = document.getElementsByClassName("box")
let b = document.body
let c = document.querySelector(".box button")

c.addEventListener("click", k => { alert("Your Response in Invalid") });
c.style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)})`;
var style = document.createElement('style');
document.head.appendChild(style);

let keyframes = `@keyframes glow {
    0% {
     }
    to {
    box-shadow: 0px 0px 10px 25px rgb(${Math.ceil(Math.random() * 255+100)},${Math.ceil(Math.random() * 255+100)},${Math.ceil(Math.random() * 255)});
      }
}`
style.sheet.insertRule(keyframes, 0);

a[0].style.animation = "glow 2s linear infinite alternate";


