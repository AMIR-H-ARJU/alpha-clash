function addClassList(elementId, setElement) {
    const identification = document.getElementById(elementId)
    identification.classList.add(setElement)
}


function removeClassList(elementId, setElement) {
    const identifier = document.getElementById(elementId)
    identifier.classList.remove(setElement)
}

function getInner(elementId) {
    const element = document.getElementById(elementId)
    element.innerText
}


function randomAlphabet() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const makeArray = alphabet.split('')
    const randomIndex = Math.round(Math.random() * 25)
    const theAlphabetRandom = makeArray[randomIndex]
    return theAlphabetRandom
}

function setBgColor(elementId) {
    const al = document.getElementById(elementId)
    al.classList.add('bg-orange-500');
}

function removeBgColor(elementId) {
    const al = document.getElementById(elementId)
    al.classList.remove('bg-orange-500');
}

function turnNumInt(elementId) {
    const theId = document.getElementById(elementId)
    const theIdInner = theId.innerText
    const int = theIdInner.parseInt(theIdInner)
}

function turnNumIntSetAlso(elementId, value) {
    const theId = document.getElementById(elementId)
    const theIdInner = theId.innerText
    theId.innerText = value
}


function getInnerTextByElement(elementId) {
    const element = document.getElementById(elementId)
    const elementInner = element.innerText
    return elementInner
}

