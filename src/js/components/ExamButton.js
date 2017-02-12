import React from 'react';

export default class ExamButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {recordStatus: 'pending'};
		this.handleTouchstart = this.handleTouchstart.bind(this);
		this.handleTouchend = this.handleTouchend.bind(this);
  	}

	render() {
		let wrapperClassName = 'exam__button exam__button--' + this.state.recordStatus,
			iconClassName = 'fa fa-microphone';

		return (
			<div className={wrapperClassName} onTouchStart={this.handleTouchstart} onTouchEnd={this.handleTouchend}>
				<i className={iconClassName}></i>
			</div>
		);
	}

	handleTouchstart() {
		console.log('touch'); // ToDo: remove before production
		this.setState({
			recordStatus: 'recording'
		});
	}

	handleTouchend() {
		console.log('touch end'); // ToDo: remove before production
		this.setState({
			recordStatus: 'pending'
		});
	}
}