import React from 'react';

class Alphabet extends React.Component {

    renderWithCharacter() {
        const style = {
            width: `${this.props.width}%`
        };

        return (
            <div className="alphabet__table__row__cell" style={style}>
                <div>{this.props.character.h}</div>
                <div>
                    <span>{this.props.character.key}</span>
                    <span>{this.props.character.k}</span>
                </div>
            </div>
        );
    }

    renderWithoutCharacter() {
        const style = {
            width: `${this.props.width}%`
        };

        return (
            <div className="alphabet__table__row__cell" style={style}></div>
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