import React from 'react';
import { Link } from 'react-router';

class HomeNavItem extends React.Component {
	render() {
		return (
			<div className='homenav__item'>
				<button className='button'>
					<Link to={this.props.path}>{this.props.name}</Link>
				</button>
			</div>
		);
	}
}

HomeNavItem.propTypes = {
	path: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired
};

export default HomeNavItem;