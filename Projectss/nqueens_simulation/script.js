let a = document.getElementsByClassName("board");
let confirmsi = document.getElementsByTagName("button");
let sizeb = document.getElementsByTagName("input");
let waiting_time=document.querySelector(".slider input");

confirmsi[0].addEventListener('click', k => {
    while (a[0].firstChild) {
        a[0].removeChild(a[0].firstChild);
    }
    confirmsi[0].style.border = "1px solid white";
    setTimeout((k) => {
        confirmsi[0].style.border = "0px solid transparent";
    }, 200);
    if (sizeb[0].value >= 1) {
        a[0].style.display = `grid`;
        let s = sizeb[0].value;
        let boardc = [];
        for (let i = 0; i < s; i++) {
            boardc[i] = [];
            for (let j = 0; j < s; j++) {
                boardc[i][j] = 0;
            }
        }
        board_make(s);
        solve(boardc, s, 0);
        a[0].style.gridTemplateColumns = `repeat(${s}, calc((min(90vh,90vw))/${s})`;
    }

})

function board_make(s) {
    for (let i = 0; i < s * s; i++) {
        let newd = document.createElement("div");
        newd.style.width = `calc((min(90vh,90vw))/${s})`;
        newd.style.height = `calc((min(90vh,90vw))/${s})`;
        if ((Math.floor(i / s) + i % s) % 2 == 0) {
            newd.style.background = "white";
        }
        else {
            newd.style.background = `black`;
        }
        a[0].appendChild(newd);
    }
}

function check(m, i, j, boardc) {
    for (let col = 0; col < m; col++) {
        if (boardc[col][j] == 1) return 0;
    }
    for (let row = 0; row < i; row++) {

        if ((boardc[i - row - 1][j - 1 - row] == 1 && j - row > 0) || (boardc[i - row - 1][j + 1 + row] == 1 && j + row < m - 1)) return 0;
    }

    for (let row = 0; row < m - i - 1; row++) {
        if ((boardc[i + row + 1][j + 1 + row] == 1 && j + row < m - 1) || (boardc[i + row + 1][j - row - 1] == 1 && j - row > 0)) return 0;
    }
    return 1;
}

function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  async function solve(boardc, m, i) {
    let num = 0;
    for (let col = 0; col < m; col++) {
      if (i == m) {
        return 1;
      }
      if (boardc[i][col] == 0) {
        num = check(m, i, col, boardc); // Assuming check is a valid function
      }
      await wait(waiting_time.value);
      if (num == 1) {
        boardc[i][col] = 1;
        var newImg = document.createElement("img");
        newImg.src = "queen.png";
        // Assuming 'a' is a valid DOM element
        a[0].children[i * m + col].appendChild(newImg);
        newImg.style.width = `calc((min(90vh,90vw))/${m} - 10px)`;
  
        i++;
        if (await solve(boardc, m, i) == 1) {
          return 1;
        }
        i--;
        boardc[i][col] = 0;
        a[0].children[i * m + col].removeChild(a[0].children[i * m + col].firstChild);
      }
    }
  }
  