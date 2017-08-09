import React from 'react';
import { Link } from 'react-router';
import { getCharacters } from 'utils/CharacterUtils';
import AlphabetTable from 'components/AlphabetTable';

export default class Learn extends React.Component {
    constructor(props) {
        super(props);
        this.characters = getCharacters();
        this.colKeys = ['a', 'i', 'u', 'e', 'o'];
        this.rowKeys = ['a', 'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w', 'nn'];
    }

	render() {
        const backStr = '<';

		return (
			<div className='learn page'>
                <div className="page__header">
                    <nav className="page__nav">
                        <Link to="/home" className="link">{backStr}</Link>
                        <h1 className="page__name">Alphabets</h1>  
                    </nav>
                </div>
                <div className="page__body">
                    <div className="alphabets__table">
                        <AlphabetTable characters={this.characters} colKeys={this.colKeys} rowKeys={this.rowKeys}/>
                    </div>
                </div>
            </div>
		);
	}
}