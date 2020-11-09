const numToguess = randomInt();


function randomInt() {
    let correctnumber = Math.floor(Math.random() * 101)
    return correctnumber
}


function getUserGuess() {
    const stringValue = document.getElementById('user-input').value
    return parseInt(stringValue, 10)
}


document.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const guess = getUserGuess()
        setMessage(guess)
        clearInput()
    }
})


function setMessage(num) {

    if (num < numToguess) {
        document.getElementById("message").innerHTML = "That was wrong, it's to low"

    } else if (num > numToguess) {
        document.getElementById("message").innerHTML = "That was wrong, it's to high"

    } else {
        document.getElementById("message").innerHTML = "That was right"
    }
}

function clearInput() {
    document.getElementById('user-input').value = ''
}