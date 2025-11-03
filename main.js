const playerName = "Viktor"
let playerhp = 100
let enemyhp = 100

function rollDice() {
    return Math.ceil(Math.random() * 6)
}

const playerhpelement = document.querySelector("#player-hp")
const enemyhpelement = document.querySelector("#enemy-hp")
const combatlogelement = document.querySelector("#combat-log")

function log(msg) {
    const li = document.createElement("li")
    li.textContent = msg
    combatlogelement.appendChild(li)
}

function gameround() {
    const playerRoll = rollDice()
    const enemyRoll = rollDice()
    if (playerRoll > enemyRoll) {
        const damage = playerRoll - enemyRoll
        log(`Du köttar fienden för ${damage}!`)
        enemyhp -= damage
    } else if (enemyRoll > playerRoll) {
        const damage = enemyRoll - playerRoll
        log(`Nedrans, du blir mulad för ${damage}!`)
        playerhp -= damage
    } else {
        console.log("Snyggt parerat, inget händer!")
    }
    playerhpelement.textContent = playerhp
    enemyhpelement.textContent = enemyhp
}

playerhpelement.textContent = playerhp
enemyhpelement.textContent = enemyhp
const playbutton = document.querySelector("#play-button")
playbutton.addEventListener("click", gameround)