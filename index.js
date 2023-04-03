let firstCard = ''
let secondCard = ''
let cards = []
let sumEl = ''
let messageEl = ""
let hasBlackJack = false
let isAlive = false
let player = {
    name: 'You',
    chips: 200
}
document.getElementById("player-el").textContent = player.name + ': $' + player.chips
function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13)+1
    if (randomCard > 9) {
        randomCard = 10
    } else if (randomCard === 1) {
        randomCard = 11
    }
    return randomCard
}
function startGame() {
    if (cards.length === 0) {
        firstCard = getRandomCard()
        secondCard = getRandomCard()
        cards.push(firstCard)
        cards.push(secondCard)
        sumEl = firstCard + secondCard
        isAlive = true
        hasBlackJack = false
        renderGame()
    }
}
function renderGame() {
    if (sumEl <= 20) {
        messageEl = 'Do you want to draw a new card?'
    } else if (sumEl === 21) {
        messageEl = 'You have blackjack!'
        hasBlackJack = true
    } else {
        messageEl = 'You are out.'
        isAlive = false
    }
    document.getElementById("message-el").textContent = messageEl
    document.getElementById("cards-el").textContent = 'Cards: '
    for (let i = 0; i < cards.length-1; i++) {
        document.getElementById("cards-el").textContent += cards[i] + ', '
    }
    document.getElementById("cards-el").textContent += cards[cards.length-1]
    document.getElementById("sum-el").textContent = 'Sum: ' + sumEl
}
function newCard() {
    if (isAlive && hasBlackJack === false) {
        let card = getRandomCard()
        cards.push(card)
        sumEl += card
        renderGame()
    }
}