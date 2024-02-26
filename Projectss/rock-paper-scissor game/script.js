let a = document.querySelector(".container .players .player1");
let b = document.querySelector(".container .players .player2");
let c = document.querySelector(".container .button .shoot");
let d = document.querySelector(".container .button .reset");
let g = document.querySelector(".container .input input");
let num1 = 0;
let num2 = 0;
a.style.background = `url(th${Math.floor(Math.random() * 3)}.jpeg)`;
a.style.backgroundRepeat = "no-repeat";
a.style.backgroundSize = "40vw 300px";
b.style.background = `url(th${Math.floor(Math.random() * 3)}.jpeg)`;
b.style.backgroundRepeat = "no-repeat";
b.style.backgroundSize = "40vw 300px";

c.addEventListener("click", k => {
    a.style.setProperty('--before-content1', ``);
    b.style.setProperty('--before-content2', ``);
    let e = Math.floor(Math.random() * 3);
    let f = Math.floor(Math.random() * 3);
    a.style.background = `url(image${e}.jpeg)`;
    a.style.backgroundRepeat = "no-repeat";
    a.style.backgroundSize = "40vw 300px";
    b.style.background = `url(image${f}.jpeg)`;
    b.style.backgroundRepeat = "no-repeat";
    b.style.backgroundSize = "40vw 300px";
    if ((e == 0 && f == 1) || (e == 1 && f == 2) || (e == 2 && f == 0)) {
        setTimeout(k => {
            b.style.background = `url(win.jpeg)`;
            b.style.backgroundRepeat = "no-repeat";
            b.style.backgroundSize = "40vw 300px";
            a.style.background = `url(lose.jpeg)`;
            a.style.backgroundRepeat = "no-repeat";
            a.style.backgroundSize = "40vw 300px";
            num2++;
            a.style.setProperty('--before-content1', `"${num1}"`);
            b.style.setProperty('--before-content2', `"${num2}"`);
            
            if (g.value == num2) {
                alert(`PLAYER 2 WINS with score ${num2} and by lead of ${num2 - num1}`);
                a.style.background = `url(th${Math.floor(Math.random() * 3)}.jpeg)`;
                a.style.backgroundRepeat = "no-repeat";
                a.style.backgroundSize = "40vw 300px";
                b.style.background = `url(th${Math.floor(Math.random() * 3)}.jpeg)`;
                b.style.backgroundRepeat = "no-repeat";
                b.style.backgroundSize = "40vw 300px";
                num1 = 0;
                num2 = 0;
                a.style.setProperty('--before-content1', ``);
                b.style.setProperty('--before-content2', ``);
                g.value="";
            }
        }, 500);
    }
    else if (e == f) {
        setTimeout(k => {
            b.style.background = `url(tie.jpeg)`;
            b.style.backgroundRepeat = "no-repeat";
            b.style.backgroundSize = "40vw 300px";
            a.style.background = `url(tie.jpeg)`;
            a.style.backgroundRepeat = "no-repeat";
            a.style.backgroundSize = "40vw 300px";
            a.style.setProperty('--before-content1', `"${num1}"`);
            b.style.setProperty('--before-content2', `"${num2}"`);
        }, 500);
    }
    else {
        setTimeout(k => {
            b.style.background = `url(lose.jpeg)`;
            b.style.backgroundRepeat = "no-repeat";
            b.style.backgroundSize = "40vw 300px";
            a.style.background = `url(win.jpeg)`;
            a.style.backgroundRepeat = "no-repeat";
            a.style.backgroundSize = "40vw 300px";
            num1++;
            a.style.setProperty('--before-content1', `"${num1}"`);
            b.style.setProperty('--before-content2', `"${num2}"`);
            if (g.value == num1) {
                alert(`PLAYER 1 WINS with score ${num1} and by lead of ${num1 - num2}`);
                a.style.background = `url(th${Math.floor(Math.random() * 3)}.jpeg)`;
                a.style.backgroundRepeat = "no-repeat";
                a.style.backgroundSize = "40vw 300px";
                b.style.background = `url(th${Math.floor(Math.random() * 3)}.jpeg)`;
                b.style.backgroundRepeat = "no-repeat";
                b.style.backgroundSize = "40vw 300px";
                num1 = 0;
                num2 = 0;
                a.style.setProperty('--before-content1', ``);
                b.style.setProperty('--before-content2', ``);
                g.value="";
            }
        }, 500);
    }
})
d.addEventListener("click", k => {
    a.style.background = `url(th${Math.floor(Math.random() * 3)}.jpeg)`;
    a.style.backgroundRepeat = "no-repeat";
    a.style.backgroundSize = "40vw 300px";
    b.style.background = `url(th${Math.floor(Math.random() * 3)}.jpeg)`;
    b.style.backgroundRepeat = "no-repeat";
    b.style.backgroundSize = "40vw 300px";
    num1 = 0;
    num2 = 0;
    a.style.setProperty('--before-content1', ``);
    b.style.setProperty('--before-content2', ``);
})