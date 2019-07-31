import { createConnectedStore } from 'undux'

// Create a store with an initial value.
const initialState = {
    questionsAnswered: 0,
    totalQuestions: 0,
    gameRunning: false,
    currentQuestionBank: [],
    currentAnswers: [],
    currentQuestionIndex: 0,
    character: {
        classes: {
            fighter: 0,
            ranger: 0,
            paladin: 0,
            cleric: 0,
            druid: 0,
            bard: 0,
            monk: 0,
            sorcerer: 0,
            barbarian: 0,
            rogue: 0,
            wizard: 0,
            warlock: 0
        },
        ability: {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
        },
        races: {
            dwarf: 0,
            elf: 0,
            halfElf: 0,
            halfing: 0,
            human: 0,
            halfOrc: 0,
            gnome: 0
        },
        alignments: {
            lg: 0,
            ln: 0,
            le: 0,
            ng: 0,
            nn: 0,
            ne: 0,
            cg: 0,
            cn: 0,
            ce: 0,
            tie: -1
        },
        level: 0
    }
}

export default createConnectedStore(initialState);
