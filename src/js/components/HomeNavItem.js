import React from 'react';
import { Link } from 'react-router';

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
	path: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired
};

export default HomeNavItem;