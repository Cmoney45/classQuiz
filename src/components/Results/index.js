import React, { Component } from 'react';
import Store from "../../store";
import "./style.css";

class Results extends Component {

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
        const alignment = [
            'xg',
            'xn',
            'xe',
            'lx',
            'nx',
            'cx',
            'lg',
            'ln',
            'le',
            'ng',
            'nn',
            'ne',
            'cg',
            'cn',
            'ce',
        ]
        const allQs = [abilities, race, alignment, characterClasses]
        console.log(allQs);


        return (
            <div>
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