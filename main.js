const playerName = "Viktor"
let playerhp = 100
let enemyhp = 100

function rollDice() {
    return Math.ceil(Math.random() * 20)
}

const playerhpelement = document.querySelector("#player-hp")
const enemyhpelement = document.querySelector("#enemy-hp")
const combatlogelement = document.querySelector("#combat-log")
const playbutton = document.querySelector("#play-button")

function log(message) {
    const li = document.createElement("li")
    li.textContent = message
    combatlogelement.appendChild(li)
    if (combatlogelement.childNodes.length > 10) {
        combatlogelement.removeChild(combatlogelement.firstChild)
    }
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
        log("Snyggt parerat, inget händer!")
    }
    playerhpelement.textContent = playerhp < 1 ? 0 : playerhp
    enemyhpelement.textContent = enemyhp < 1 ? 0 : enemyhp
    if (playerhp < 1 || enemyhp < 1) {
        playbutton.disabled = true
    } else if (playerhp < 30) {
        playerhpelement.classList.add("hp-low")
    }

}

playerhpelement.textContent = playerhp
enemyhpelement.textContent = enemyhp
playbutton.addEventListener("click", gameround)