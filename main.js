function rollDice() {
    return Math.ceil(Math.random() * 20)
}

const playerhpelement = document.querySelector("#player-hp")
const enemyhpelement = document.querySelector("#enemy-hp")
const combatlogelement = document.querySelector("#combat-log")
const playbutton = document.querySelector("#play-button")

function log(message, type) {
    const li = document.createElement("li")
    if (type) {
        li.classList.add(type)
    }
    li.textContent = message
    combatlogelement.appendChild(li)
    if (combatlogelement.childNodes.length > 10) {
        combatlogelement.removeChild(combatlogelement.firstChild)
    }
}

const player = {
    "name": "the stadow",
    "hp": 100
}

const enemy = {
    "name": "goblin",
    "hp": 40
}


function gameround() {
    const playerRoll = rollDice()
    const enemyRoll = rollDice()
    if (playerRoll > enemyRoll) {
        const damage = playerRoll - enemyRoll
        const playerattackmessage = [
            `${player.name} köttar ${enemy.name} för ${damage}!`,
            `våldsamt strycker ${player.name} ${enemy.name} för ${damage}!`,
            `${player.name} gnuggar in ${damage} skada!`,
    ]
    log(playerattackmessage[Math.floor(Math.random() * playerattackmessage.length)], "player")
        enemy.hp -= damage
    } else if (enemyRoll > playerRoll) {
        const damage = enemyRoll - playerRoll
        const enemyattackmessage = [
            `${enemy.name} köttar ${player.name} med ${damage}!`,
            `våldsamt strycker ${enemy.name} ${player.name} med ${damage}!`,
            `${enemy.name} smäller sönder ${player.name} med ${damage}!`,
    ]
    log(enemyattackmessage[Math.floor(Math.random() * enemyattackmessage.length)], "enemy")
        player.hp -= damage
    } else {
        log("Snyggt parerat, inget händer!")
    }
    playerhpelement.textContent = player.hp < 1 ? 0 : player.hp
    enemyhpelement.textContent = enemy.hp < 1 ? 0 : enemy.hp
    if (player.hp < 1 || enemy.hp < 1) {
        playbutton.disabled = true
    } else if (player.hp < 30) {
        playerhpelement.classList.add("hp-low")
    }

}

playerhpelement.textContent = player.hp
enemyhpelement.textContent = enemy.hp
log(`framför dig står en fruktansvärd ${enemy.name}!`)
playbutton.addEventListener("click", gameround)