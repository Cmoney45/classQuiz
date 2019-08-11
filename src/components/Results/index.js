import React, { Component } from 'react';
import Store from "../../store";
import "./style.css";

class Results extends Component {

    constructor(props){
        super(props);
        this.state = {
             class1 : "fighter",
             classCount: 0,
             class2: null,
             playerRace: "human",
             playerRaceCount: 0,
             playerStats: {},
             alignment: [],
        }
      }

    finalResult = (whereToSearch, store) => {
        // let class1 = "fighter";
        // let classCount = 0;
        // let class2 = null;
        // let playerRace = "human";
        // let playerRaceCount = store.get(playerRace)
        // let playerStats = {};
        // let alignment = [];
        console.log(whereToSearch, store);
        // Player Class
        // Loop through characterClasses
        for (let i = 0; i < whereToSearch[4].length; i++) {
            // get current index value
            let currentIndexCount = store.get(whereToSearch[4][i]);

            // If it's greater than current class count, change the class
            if (this.state.classCount < currentIndexCount) {
                this.state.classCount = currentIndexCount;
                this.state.class1 = whereToSearch[4][i]
                this.state.class2 = null;
                
            }
            // If it's equal, set the multi-class
            if (this.state.classCount === currentIndexCount) {
                this.state.class2 = whereToSearch[4][i]
            }
        }

        // Player Abilities
        for (let i = 0; i < whereToSearch[0].length; i++) {

              const  abilityName= whereToSearch[0][i];
               const value= store.get(whereToSearch[0][i]);
            

            this.state.playerStats[abilityName] = value;
        }

        // Player Race
        for (let i = 0; i < whereToSearch[1].length; i++) {
            let currentIndexCount = store.get(whereToSearch[1][i])

            if (this.state.playerRaceCount < currentIndexCount) {
                this.state.playerRaceCount = currentIndexCount;
                this.state.playerRace = whereToSearch[1][i]
            }
        }

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