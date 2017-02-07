import React from 'react';
export default class App extends React.Component {
	render() {
		return (
			<div className='mainContainer'>{this.props.children}</div>
		);
	}
}