import React from 'react';

class RecordButton extends React.Component {
	render() {
		let buttonClassName = 'record__button record__button--' + this.props.recorderStatus,
			iconClassName = 'fa fa-microphone';

		return (
			<div className={buttonClassName} onTouchStart={this.props.touchStartHandler} onTouchEnd={this.props.touchEndHandler}>
				<i className={iconClassName}></i>
			</div>
		);
	}
}

RecordButton.propTypes = {
	touchStartHandler: React.PropTypes.func.isRequired,
	touchEndHandler: React.PropTypes.func.isRequired
};

export default RecordButton;