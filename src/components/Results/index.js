import React, { Component } from 'react';
import Store from "../../store";
import "./style.css";

class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            class1: "fighter",
            classCount: 0,
            class2: null,
            playerRace: "human",
            playerRaceCount: 10,
            playerStats: {},
            playerAlignmentLvC: 'nx',
            playerAlignmentLvCCount: 0,
            playerAlignmentGvE: 'xn',
            playerAlignmentGvECount: 0,
            playerAlignment: 'xx'
        }
    }

    finalResult = (whereToSearch, store) => {

        let abilityArray = whereToSearch[0]
        let playerRaceArray = whereToSearch[1]
        let playerLvCArray = whereToSearch[2]
        let playerGvEArray = whereToSearch[3]
        let playerClassArray = whereToSearch[4];

        // Player Class
        // Loop through characterClasses
        for (let i = 0; i < playerClassArray.length; i++) {
            // get current index value
            let currentIndexCount = store.get(playerClassArray[i]);

            // If it's greater than current class count, change the class
            if (this.state.classCount < currentIndexCount) {
                this.state.classCount = currentIndexCount;
                this.state.class1 = playerClassArray[i]
                this.state.class2 = null;

            }
            // If it's equal, set the multi-class
            if (this.state.classCount === currentIndexCount) {
                this.state.class2 = playerClassArray[i]
            }
        }

        // Player Abilities
        for (let i = 0; i < abilityArray.length; i++) {

            const abilityName = abilityArray[i];
            const value = store.get(abilityArray[i]);


            this.state.playerStats[abilityName] = value;
        }

        // Player Race
        for (let i = 0; i < playerRaceArray.length; i++) {
            let currentIndexCount = store.get(playerRaceArray[i])

            if (this.state.playerRaceCount < currentIndexCount) {
                this.state.playerRaceCount = currentIndexCount;
                this.state.playerRace = playerRaceArray[i]
            }
        }

        // Player Alignment
        for (let i = 0; i < playerLvCArray.length; i++) {
            let currentIndexCount = store.get(playerLvCArray[i])

            if (this.state.playerAlignmentLvCCount < currentIndexCount) {
                this.state.playerAlignmentLvCCount = currentIndexCount;
                this.state.playerAlignmentLvC = playerLvCArray[i]
            }
        }
        for (let i = 0; i < playerGvEArray.length; i++) {
            let currentIndexCount = store.get(playerGvEArray[i])

            if (this.state.playerAlignmentGvECount < currentIndexCount) {
                this.state.playerAlignmentGvECount = currentIndexCount;
                this.state.playerAlignmentGvE = playerGvEArray[i]
            }
        }

        this.state.playerAlignment = this.state.playerAlignmentLvC.slice(0,1) + this.state.playerAlignmentGvE.slice(1,2) 

    }

    componentDidMount() {
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
        this.finalResult(allQs, store);
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