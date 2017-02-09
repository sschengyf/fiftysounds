import React from 'react';

export default class Paper extends React.Component {
	render() {
		return (
			<div className='paper'>{this.props.alphabet}</div>
		);
	}
}