import React from 'react';

export default class Paper extends React.Component {
	render() {
		return (
			<div className='paper'>
                {this.getContent()}
            </div>
		);
	}

    getContent() {
        if (this.props.alphabet) {
            return (
                <div className='alphabet__box'>
                    <div className='alphabet--testing'>{this.props.alphabet}</div>
                </div>
            );
        } else if (this.props.character) {
            return (
                <div className='result__box'>
                    <div className='result__row'>
                        <div className='alphabet--result'>
                            <p className='alphabet'>{this.props.character.data.h}</p>
                            <span className='alphabet__class'>Hiragana</span>
                        </div>
                    </div>
                    <div className='result__row'>
                        <div className='alphabet--result'>
                            <p className='alphabet'>{this.props.character.id}</p>
                            <span className='alphabet__class'>Romaji</span>
                        </div>
                        <div className='alphabet--result'>
                            <p className='alphabet'>{this.props.character.data.k}</p>
                            <span className='alphabet__class'>Katakana</span>
                        </div>
                    </div>
                </div>
            );
        }
    }
}