import React from 'react';
import { playAudio } from 'utils/AudioUtils';

class Alphabet extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        playAudio(this.props.character.key);
    }

    renderWithCharacter() {
        const style = {
            width: `${this.props.width}%`
        };

        return (
            <div className="alphabet__table__cell alphabet__table__cell--filled" style={style} onClick={this.handleClick}>
                <div className="character__wrapper">
                    <div className="character__hiragana">{this.props.character.h}</div>
                    <div className="character__associate">
                        <span className="character__romaji">{this.props.character.key}</span>
                        <span className="character__katakana">{this.props.character.k}</span>
                    </div>
                </div>
            </div>
        );
    }

    renderWithoutCharacter() {
        const style = {
            width: `${this.props.width}%`
        };

        return (
            <div className="alphabet__table__cell" style={style}></div>
        );
    }

    render() {
        if (Object.getOwnPropertyNames(this.props.character).length > 0) {
            return this.renderWithCharacter();
        } else {
            return this.renderWithoutCharacter();
        }
    }
}

Alphabet.propTypes = {
    character: React.PropTypes.object.isRequired
};

export default Alphabet;