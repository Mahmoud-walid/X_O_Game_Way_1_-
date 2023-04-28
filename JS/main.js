let turn = "X"
let emoji = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '🙂',
    '🤗', '🤔', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒',
    '😓', '😔', '😕', '🙃', '🤑', '😲', '☹️', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '🤯', '😬', '😰',
    '😱', '🥵', '🥶', '😳', '🤪', '😵', '🥴', '😷', '🤢', '🤮', '🤧', '😇', '🤠', '🥳', '🥺', '🤥', '🤫', '🤭', '🧐', '🤓', '😈',
    '👿', '👹', '👺', '💀', '👻', '👽', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾']
let title = document.querySelector('.title')
let xScore = document.getElementById('xScore')
let oScore = document.getElementById('oScore')

function setReload() {
    setInterval(function () {
        title.innerHTML += emoji[Math.floor(Math.random() * emoji.length)]
    }, 1000)
    setTimeout(function () {
        location.reload()
    }, 3000)
}

let squares = []
function endGame(number1, number2, number3) {

    // start score
    if (squares[number1] === 'X') {
        let xWins = localStorage.getItem('xWins');
        xWins = xWins ? parseInt(xWins) + 1 : 1;
        localStorage.setItem('xWins', xWins);
    } else {
        let oWins = localStorage.getItem('oWins');
        oWins = oWins ? parseInt(oWins) + 1 : 1;
        localStorage.setItem('oWins', oWins);
    }
    // End score

    title.innerHTML = `${squares[number1]} winner`
    document.getElementById(`item${number1}`).style.backgroundColor = "#f0656595"
    document.getElementById(`item${number2}`).style.backgroundColor = "#f0656595"
    document.getElementById(`item${number3}`).style.backgroundColor = "#f0656595"
    setReload()
} //endGame Function

// start score
let xWins = localStorage.getItem('xWins') || 0;
let oWins = localStorage.getItem('oWins') || 0;

xScore.innerHTML = `${xWins}`
oScore.innerHTML = `${oWins}`
// End score
// --*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*
function winner() {
    let isDraw = true;
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById(`item${i}`).innerHTML;    //storage all values of items in array
        if (squares[i] === '') {
            isDraw = false;
        }
    }
    // Check if it Draw
    if (isDraw) {
        title.innerHTML = "DRAW!";
        setReload()
    }

    // Start Conditions to WIN
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != "") {
        endGame(1, 2, 3)
    }

    if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != "") {
        endGame(4, 5, 6)
    }

    if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != "") {
        endGame(7, 8, 9)
    }

    if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != "") {
        endGame(1, 4, 7)
    }

    if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != "") {
        endGame(2, 5, 8)
    }

    if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != "") {
        endGame(3, 6, 9)
    }

    if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != "") {
        endGame(1, 5, 9)
    }

    if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != "") {
        endGame(3, 5, 7)
    }
    // End Conditions to WIN

}// Winner Function

// --*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*
// Start Turn X and O
function game(id) {
    let element = document.getElementById(id)

    if (turn === 'X' && element.innerHTML == '') {
        element.innerHTML = 'X'
        turn = 'O'
        title.innerHTML = 'O'
        title.style.color = '#9f1e1e'
    }
    else if (turn === 'O' && element.innerHTML == '') {
        element.innerHTML = 'O'
        turn = 'X'
        title.innerHTML = 'X'
        title.style.color = '#9f1e1e'
    }
    winner();
}
// End Turn X and O
// --*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*

// Button to Reload
function reloadButton() {
    location.reload()
    localStorage.clear();
}
