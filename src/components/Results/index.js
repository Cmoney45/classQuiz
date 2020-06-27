import React, { Component } from 'react';
import Store from "../../store";
import "./style.css";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

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
        let class1= "fighter"
        let classCount= 0
        let class2= null
        let playerRace= "human"
        let playerRaceCount= 10
        let playerStats= {}
        let playerAlignmentLvC= 'nx'
        let playerAlignmentLvCCount= 0
        let playerAlignmentGvE= 'xn'
        let playerAlignmentGvECount= 0
        let playerAlignment= 'xx'

        // Player Class
        // Loop through characterClasses
        for (let i = 0; i < playerClassArray.length; i++) {
            // get current index value
            let currentIndexCount = store.get(playerClassArray[i]);

            // If it's greater than current class count, change the class
            if (classCount < currentIndexCount) {
                classCount = currentIndexCount;
                class1 = playerClassArray[i]
                class2 = null;

            }
            // If it's equal, set the multi-class
            if (classCount === currentIndexCount) {
                class2 = playerClassArray[i]
            }
        }

        // Player Abilities
        for (let i = 0; i < abilityArray.length; i++) {

            const abilityName = abilityArray[i];
            const value = store.get(abilityArray[i]);


            playerStats[abilityName] = value;
        }

        // Player Race
        for (let i = 0; i < playerRaceArray.length; i++) {
            let currentIndexCount = store.get(playerRaceArray[i])

            if (playerRaceCount <= currentIndexCount) {
                playerRaceCount = currentIndexCount;
                playerRace = playerRaceArray[i]
            }
        }

        // Player Alignment
        for (let i = 0; i < playerLvCArray.length; i++) {
            let currentIndexCount = store.get(playerLvCArray[i])

            if (playerAlignmentLvCCount < currentIndexCount) {
                playerAlignmentLvCCount = currentIndexCount;
                playerAlignmentLvC = playerLvCArray[i]
            }
        }
        for (let i = 0; i < playerGvEArray.length; i++) {
            let currentIndexCount = store.get(playerGvEArray[i])

            if (playerAlignmentGvECount < currentIndexCount) {
                playerAlignmentGvECount = currentIndexCount;
                playerAlignmentGvE = playerGvEArray[i]
            }
        }

        playerAlignment = playerAlignmentLvC.slice(0, 1) + playerAlignmentGvE.slice(1, 2)

        this.setState({
            class1,
            classCount,
            class2,
            playerRace,
            playerRaceCount,
            playerStats,
            playerAlignmentLvC,
            playerAlignmentLvCCount,
            playerAlignmentGvE,
            playerAlignmentGvECount,
            playerAlignment
        })

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
        const resultName = ["Ability Score", "Race", "Law & Chaos", "Good & Evil", "Class"]

        return (
            <div>
                <div
                    id="results"
                > <b>You are a:  </b>
                    {this.state.playerAlignment} {this.state.playerRace} {this.state.class1}/{this.state.class2}
                </div>
                <br></br>
                <br></br>
                <div
                    id='details'
                >
                    {allQs.map((bank, index) => (
                        <ExpansionPanel
                            key={index}
                        >
                            <ExpansionPanelSummary>{resultName[index]} Results</ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <ul>
                                    {bank.map((eachResult, index2) => (
                                        <li
                                            key={index2}
                                        >{eachResult.toUpperCase()}: {store.get(eachResult)}
                                        </li>
                                    ))}
                                </ul>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    ))}
                </div>
            </div>
        )
    }
}

export default Store.withStore(Results);