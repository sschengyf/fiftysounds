import React from 'react';
import Alphabet from 'components/Alphabet';
import PropTypes from 'prop-types';

class AlphabetRow extends React.Component {
    render() {
        const width = 100/this.props.colKeys.length;
        return (
            <div className="alphabet__table__row">
                {
                    this.props.colKeys.map((colKey) => {
                        const character = this.props.row[colKey] || {};
                        let key = '';
                        if (Object.getOwnPropertyNames(character).length > 0) {
                            key = `${character.r}${character.c}`;
                        } else {
                            key = `${this.props.rowKey}${colKey}`;
                        }
                        return <Alphabet key={key} character={character} width={width}/>
                    })
                }
            </div>
        );
    }
}

AlphabetRow.propTypes = {
    row: PropTypes.object.isRequired,
    colKeys: PropTypes.array.isRequired
};

export default AlphabetRow;