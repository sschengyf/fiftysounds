import React from 'react';
import PropTypes from 'prop-types';

class RecordButton extends React.Component {
    render() {
        const buttonClassName = `record__button record__button--${this.props.recorderStatus}`;
        const iconClassName = 'recognizing' === this.props.recorderStatus ? 'fa fa-ellipsis-h' : 'fa fa-microphone';
        const circleClass = `mc100 p${this.props.progress}`;

        return (
            <div className={buttonClassName} onTouchStart={this.props.touchStartHandler}
                 onTouchEnd={this.props.touchEndHandler}>
                <div className={circleClass}>
                    <span><i className={iconClassName}></i></span>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                </div>
            </div>
        );
    }
}

RecordButton.propTypes = {
    touchStartHandler: PropTypes.func.isRequired,
    touchEndHandler: PropTypes.func.isRequired
};

export default RecordButton;