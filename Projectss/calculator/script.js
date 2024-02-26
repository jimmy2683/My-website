let a = document.getElementsByTagName("th");
let b = document.querySelector("input");
let c = '';

for (let i = 1; i < 21; i++) {
    a[i].addEventListener("click", k => {
        let keyframe1 = `@keyframes bubble{
            0%{
                transform: scale(0.75);
                translate:5px;
                opacity:80%;
            }
            50%{
                translate:-10px;
                opacity:70%;
            }
            to{
                transform: scale(01);
                translate:5px;
                opacity:100%;
            }
        }`;
        let keyframe2 = `@keyframes display{
            0%{
                background:black;
            }
            50%{
                background:lavender;
            }
            100%{
                background:black;
            }
        }`;
        let styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframe1, 0);
        styleSheet.insertRule(keyframe2, 0);
        a[i].style.border = "1px solid goldenrod";
        a[i].style.borderRadius = "60%";
        a[i].style.animation = `bubble 1s ease-out 1 alternate`;
        if (i != 20 && i != 2 && i != 8 && i != 17 && i != 1 && i != 4) {
            b.value += `${a[i].innerHTML}`;
            c += `${a[i].innerHTML}`;
            document.body.style.animation = "display 5s ease-in-out 1"
        }
        if (i == 20) {
            b.value = eval(c);
            c = b.value;

        }
        if (i == 1) {
            b.value = '';
            c = '';
        }
        if ((b.value == "NaN" || b.value == "Infinity" || b.value == "-Infinity") && i == 2) {
            b.value = '';
            c = '';
        }
        if (i == 2) {
            b.value = `${b.value.slice(0, -1)}`;
            c = `${c.slice(0, -1)}`;
        }
        if (i == 4) {
            b.value += '÷';
            c += '/'
        }
        if (i == 8) {
            b.value += '×';
            c += '*'
        }
        for (let j = 1; j < 21; j++) {
            if (j != i) {
                a[j].style.border = "0px solid transparent";
            }
        }
    })
}
b.addEventListener("keypress", k => {
    if (k.key === '*') {
        c += '*';
    }
})
