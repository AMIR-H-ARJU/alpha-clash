function continueGame() {
    const alphabet = randomAlphabet()
    const alphaSet = document.getElementById('current-alpha')
    alphaSet.innerText = alphabet
    setBgColor(alphabet)
    keyUpEvent()
}



document.addEventListener('keyup', function keyUpEvent(event) {
    const playerPressed = event.key
    if(playerPressed === 'escape'){
        gameOver()
    }
    const expectedToPress = document.getElementById('current-alpha')
    const needToPress = expectedToPress.innerText
    if (needToPress.toLowerCase() === playerPressed.toLowerCase()) {
        const theId = document.getElementById("scoreCard")
        const theInn = theId.innerText
        const theInt = parseInt(theInn)
        const newScore = theInt + 1
        const Score = newScore
        theId.innerText = Score
        removeBgColor(needToPress.toLowerCase())
        continueGame()

    } else {
        const theId = document.getElementById("life-card")
        const theInn = theId.innerText
        const theInt = parseInt(theInn)
        const negScore = theInt - 1
        theId.innerText = negScore
        if (negScore === 0) {
            gaveOver()
        }
    }

})
function play() {
    addClassList('interface', 'hidden')
    addClassList('score', 'hidden')
    removeClassList('playFace', 'hidden')
    turnNumIntSetAlso("life-card", 5)
    turnNumIntSetAlso('scoreCard', 0)
   
    continueGame()
}

function gaveOver() {
    addClassList('playFace', 'hidden')
    removeClassList('score', 'hidden')
    const id = document.getElementById('finalS')
    const theScore = document.getElementById("scoreCard")
    const theInnerScore = theScore.innerText
    id.innerText = theInnerScore
    const gettingInnerElement = getInnerTextByElement("current-alpha")
    removeBgColor(gettingInnerElement) 
}
