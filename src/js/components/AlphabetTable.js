import React from 'react';
import AlphabetRow from 'components/AlphabetRow';

class AlphabetTable extends React.Component {
    render() {
        let rows = {};
        const charKeys = Object.keys(this.props.characters);
        this.props.rowKeys.forEach((rowKey) => {
            if (undefined === rows[rowKey]) {
                rows[rowKey] = {};
            }
            charKeys.forEach((charKey) => {
                const char = Object.assign(this.props.characters[charKey], {key: charKey});
                if (rowKey ===  char.r) {
                    rows[rowKey][char.c] = char;
                }
            })
        });

        return (
            <div className="alphabet__table">
                {
                    this.props.rowKeys.map((rowKey, index) => {
                        return (<AlphabetRow key={index} row={rows[rowKey]} colKeys={this.props.colKeys} rowKey={rowKey}/>);
                    })
                }
            </div>
        );
    }
}

AlphabetTable.propTypes = {
    characters: React.PropTypes.object.isRequired,
    colKeys: React.PropTypes.array.isRequired,
    rowKeys: React.PropTypes.array.isRequired
};

export default AlphabetTable;