import React, { Component } from 'react';
import Store from "../../store";
import "./style.css";

class Results extends Component {

    finalResult = (whereToSearch, store) => {
        let class1 = "fighter";
        let classCount = 0;
        let class2 = null;
        let playerRace = "human";
        let playerRaceCount = store.get(playerRace)
        let playerStats = {};
        let alignment = [];

        // Player Class
        // Loop through characterClasses
        for (let i = 0; i < whereToSearch.characterClasses.length; i++) {
            // get current index value
            let currentIndexCount = store.get(whereToSearch.characterClasses[i]);

            // If it's greater than current class count, change the class
            if (classCount < currentIndexCount) {
                classCount = currentIndexCount;
                class1 = whereToSearch.characterClasses[i]
                class2 = null;
            }
            // If it's equal, set the multi-class
            if (classCount === currentIndexCount) {
                class2 = whereToSearch.characterClasses[i]
            }
        }

        // Player Abilities
        for (let i = 0; i < whereToSearch.abilities.length; i++) {

            const ability = { 
                abilityName: whereToSearch.abilities[i],
                value: store.get(whereToSearch.abilities[i])
            } 

            Object.assign(playerStats, ability);
        }

        // Player Race
        for (let i = 0; i < whereToSearch.characterClasses.length; i++) {
            let currentIndexCount = store.get(whereToSearch.race[i])

            if (playerRaceCount < currentIndexCount) {
                playerRaceCount = currentIndexCount;
                playerRace = whereToSearch.race[i]
            }
        }

    }

    render() {
        const { store } = this.props;

        const characterClasses = [
            'fighter',
            'ranger',
            'paladin',
            'cleric',
            'druid',
            'bard',
            'monk',
            'sorcerer',
            'barbarian',
            'rogue',
            'wizard',
            'warlock'
        ]

        const abilities = [
            'strength',
            'dexterity',
            'constitution',
            'intelligence',
            'wisdom',
            'charisma'
        ]

        const race = [
            'dwarf',
            'elf',
            'halfElf',
            'halfling',
            'human',
            'halfOrc',
            'gnome'
        ]

        const alignmentLvC = [
            'lx',
            'nx',
            'cx',
        ]

        const alignmentGvE = [
            'xg',
            'xn',
            'xe',
        ]

        const allQs = [abilities, race, alignmentLvC, alignmentGvE, characterClasses]

        return (
            <div id='details'>
                {allQs.map((bank, index) => (
                    <div
                        key={index}
                    >
                        <div>{} Results</div>
                        <ul>
                            {bank.map((eachResult, index2) => (
                                <li
                                    key={index2}
                                >{eachResult.toUpperCase()}: {store.get(eachResult)}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        )
    }
}

export default Store.withStore(Results);