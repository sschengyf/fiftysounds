import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

class HomeNavItem extends React.Component {
    render() {
        let className = 'homenav__item';
        className += ' homenav__item--background-' + this.props.style;

        return (
            <div className={className}>
                <Link to={this.props.path} className='navlink'>
                    <button className='button'>
                        {this.props.name}
                    </button>
                </Link>
            </div>
        );
    }
}

HomeNavItem.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default HomeNavItem;