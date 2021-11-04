import { getPokemon, generateComPokemon } from '../functions/utils.js';
import { moves } from '../data/pokemon-moves.js';
import { getActive } from '../functions/getActive.js';
import { baseStat } from '../functions/baseStat.js';
import { damage, heals } from '../functions/damage.js';

const move1 = document.getElementById('move1');
const move2 = document.getElementById('move2');
const move3 = document.getElementById('move3');
const move4 = document.getElementById('move4');
// const switchButton = document.getElementById('switch');
const submit = document.getElementById('submit');
const compHP = document.getElementById('comp-hp');
const compImage = document.getElementById('comp-image');
const playerHP = document.getElementById('player-hp');
const playerImage = document.getElementById('player-image');
const move1Span = document.getElementById('move-1-span');
const move2Span = document.getElementById('move-2-span');
const move3Span = document.getElementById('move-3-span');
const move4Span = document.getElementById('move-4-span');


const playerPokemon1 = getPokemon();
console.log(playerPokemon1);

const computerPokemon1 = generateComPokemon();

//player pokemon data
let playerPokemon = [];
playerPokemon1.forEach((Object)=>{
    playerPokemon.push({
        num: Object.num,
        name: Object.name,
        types: Object.types,
        moves: Object.moves, 
        baseStats: { hp: baseStat(Object.baseStats.hp), atk: baseStat(Object.baseStats.atk), def: baseStat(Object.baseStats.def), spa: baseStat(Object.baseStats.spa), spd: baseStat(Object.baseStats.spd), spe: baseStat(Object.baseStats.spe) },
        img: Object.img
    });
});



// let computerPokemon = [];
// computerPokemon1.forEach((Object)=>{
//     computerPokemon.push({
//         num: Object.num,
//         name: Object.name,
//         types: Object.types,
//         moves: Object.moves, 
//         baseStats: { hp: baseStat(Object.baseStats.hp), atk: baseStat(Object.baseStats.atk), def: baseStat(Object.baseStats.def), spa: baseStat(Object.baseStats.spa), spd: baseStat(Object.baseStats.spd), spe: baseStat(Object.baseStats.spe) },
//         img: Object.img
//     });
// });


playerPokemon1[0].active = true;


// NEED TO WORK ON ACTIVE POKEMON BASE STATS
const activePokemon1 = getActive(playerPokemon1);
const activePokemon = {
    num: activePokemon1.num,
    name: activePokemon1.name,
    types: activePokemon1.types,
    moves: activePokemon1.moves, 
    baseStats: { hp: baseStat(activePokemon1.baseStats.hp), atk: baseStat(activePokemon1.baseStats.atk), def: baseStat(activePokemon1.baseStats.def), spa: baseStat(activePokemon1.baseStats.spa), spd: baseStat(activePokemon1.baseStats.spd), spe: baseStat(activePokemon1.baseStats.spe) },
    img: activePokemon1.img
};
playerPokemon[0].active = true;
console.log(activePokemon);
playerHP.textContent = activePokemon.baseStats.hp;
playerImage.src = `../${activePokemon.img}`;

let playerStats = {
    hp: activePokemon.baseStats.hp,
    atk: activePokemon.baseStats.atk,
    def: activePokemon.baseStats.def,
    spa: activePokemon.baseStats.spa,
    spd: activePokemon.baseStats.spd,
    spe: activePokemon.baseStats.spe
};
console.log(playerStats);

//radio buttons
move1Span.textContent = activePokemon.moves[0];
move1.value = activePokemon.moves[0];
move2Span.textContent = activePokemon.moves[1];
move2.value = activePokemon.moves[1];
move3Span.textContent = activePokemon.moves[2];
move3.value = activePokemon.moves[2];
move4Span.textContent = activePokemon.moves[3];
move4.value = activePokemon.moves[3];

computerPokemon1[0].active = true;
//computer pokemon data
const activeComp1 = getActive(computerPokemon1);
console.log(activeComp1);
const computerPokemon = {
    num: activeComp1.num,
    name: activeComp1.name,
    types: activeComp1.types,
    moves: activeComp1.moves, 
    baseStats: { hp: baseStat(activeComp1.baseStats.hp), atk: baseStat(activeComp1.baseStats.atk), def: baseStat(activeComp1.baseStats.def), spa: baseStat(activeComp1.baseStats.spa), spd: baseStat(activeComp1.baseStats.spd), spe: baseStat(activeComp1.baseStats.spe) },
    img: activeComp1.img
};
compHP.textContent = computerPokemon.baseStats.hp;
compImage.src = `../${computerPokemon.img}`;

let compStats = {
    hp: computerPokemon.baseStats.hp,
    atk: computerPokemon.baseStats.atk,
    def: computerPokemon.baseStats.def,
    spa: computerPokemon.baseStats.spa,
    spd: computerPokemon.baseStats.spd,
    spe: computerPokemon.baseStats.spe
};

//turn - start on click 'submit'
//if isDead(player) === true || isDead(comp)) === true
//turn++
//check speed/priority
//if isDead(player) === true || isDead(comp)) === true
    //game over
//else
    //if playerSpeed >
        //player turn
        //check move
            //damage()
            //STAB - if we do
            //if effective (damage * effectiveValue)
            //save new health
            //if isDead(player) === true || isDead(comp)) === true
            //if isKO() === true - switch pokemon
    //else
        //computer turn
        //random assign move
            //damage()
            //STAB (maybe)
            //save new health
            //if isDead(player) === true || isDead(comp)) === true


// const pokeForm = document.getElementById('move-select-form');
let turn = 0;
const maxHealth = playerStats.hp;
let currentHp = activePokemon.baseStats.hp;
let computerHp = compStats.hp;
submit.addEventListener('click', (e) => {
    console.log("ONCLICK", currentHp);
    e.preventDefault();
    const selectedMoveRadio = document.querySelector('input[type=radio]:checked');
    turn++;
    let randomNumber = Math.floor(Math.random() * 3); // make this 
    let compMove = computerPokemon.moves[randomNumber];
    let computerMove = moves[compMove];
    console.log("COMP MOVE NAME", compMove);
    if (selectedMoveRadio.id === 'switch') {
        console.log('switch button pressed');
    } else {
        const selectedMove = selectedMoveRadio.value;
        const moveData = moves[selectedMove];
        console.log("SELECTED MOVES", selectedMove);
        console.log("priority", moveData.priority);
        console.log("comp prio", computerMove.priority);
        if (moveData.priority > computerMove.priority){
    
            if (moveData.category === 'Physical') {console.log("asdfasdf");
                currentHp = damage(playerStats.atk, compStats.def, compStats.hp, moveData.basePower); 
                console.log("if tree health", currentHp);
                playerHP.textContent = currentHp;
            } else if (moveData.category === 'Special') {
                currentHp = damage(playerStats.spa, compStats.spd, compStats.hp, moveData.basePower);
                playerHP.textContent = currentHp;
            } else {
                currentHp = heals(maxHealth, currentHp);
                playerHP.textContent = currentHp;
            }
            console.log("moveDataCategory", moveData.category);
        } else if (computerMove.priority > moveData.priority) {
            if (computerMove.category === 'Physical') {
                currentHp = damage(compStats.atk, playerStats.def, playerStats.hp, computerMove.basePower);
                console.log("HEALTH AFTER BATTLE", currentHp);
                activePokemon.hp = currentHp;
            } else {
                currentHp = damage(compStats.spa, playerStats.spd, playerStats.hp, computerMove.basePower);
                activePokemon.hp = currentHp;
                console.log("HEALTH AFTER BATTLE", currentHp);
            }
        } else {
            if (playerStats.spe >= compStats.spe) {
                if (moveData.category === 'Physical') {
                    let computerHp = damage(playerStats.atk, compStats.def, compStats.hp, moveData.basePower);
                    // activePokemon.hp = currentHp;
                    console.log("HEALTH AFTER BATTLE", currentHp);

                    console.log(moveData.basePower);
                } else if (moveData.category === 'Special') {
                    let computerHp = damage(playerStats.spa, compStats.spd, compStats.hp, moveData.basePower);
                    activePokemon.hp = currentHp;
                    console.log("HEALTH AFTER BATTLE", currentHp);

                } else {
                    currentHp = heals(maxHealth, currentHp);
                    playerHP.textContent = currentHp;
                    activePokemon.hp = currentHp;
                    console.log("HEAL", currentHp);

                }
            } else if (computerMove.category === 'Physical') {
                currentHp = damage(compStats.atk, playerStats.def, playerStats.hp, computerMove.basePower);
                activePokemon.baseStats.hp = currentHp;
                console.log("HEALTH AFTER BATTLE", currentHp);

            } else {
                currentHp = damage(compStats.spa, playerStats.spd, playerStats.hp, computerMove.basePower);
                playerHP.textContent = currentHp;
                activePokemon.baseStats.hp = currentHp;
                console.log("HEALTH AFTER BATTLE", currentHp);
            }
        }
        console.log("currentHP-end FUNCTION", currentHp);
        activePokemon.baseStats.hp = currentHp;
        console.log("active pokemon", activePokemon);
        playerHP.textContent = currentHp;
        compHP.textContent = computerHp;
    }
});


