import React from 'react';

export default class ExamButton extends React.Component {
	render() {

		let className = 'fa fa-microphone';

		return (
			<div className='exam__button'>
				<i className={className}></i>
			</div>
		);
	}
}