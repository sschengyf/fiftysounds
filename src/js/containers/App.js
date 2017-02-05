import React from 'react';
export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello, {this.props.name}</h1>
				<h2>Nice to meet you</h2>
				<h3>Nice to meet you too</h3>
				<h4>Nice to meet you too too</h4>
			</div>
			);
	}
}