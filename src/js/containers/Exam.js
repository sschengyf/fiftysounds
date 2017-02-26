import React from 'react';
import { getCharacter } from 'utils/CharacterUtils';
import Paper from 'components/Paper';
import RecordButton from 'components/RecordButton';
import { connect } from 'react-redux';
import { recordVoice, recognizeVoice, checkRecognizerPermission } from 'actions/ExamActions';
import { Link } from 'react-router';

class Exam extends React.Component {
	constructor(props) {
		super(props);
		this.handleTouchStart = this.handleTouchStart.bind(this);
		this.handleTouchEnd = this.handleTouchEnd.bind(this);
  	}

  	componentWillMount() {
  		const { dispatch } = this.props;
  		dispatch(checkRecognizerPermission());
  	}

	render() {
		return (
			<div className='exam page'>
				<h1 className='intro'>Please pronounce alphabet below</h1>
				<div className='exam__center'>
					<Paper className='exam__paper' alphabet={this.props.character.data.display}/>
					<RecordButton {...this.props} touchStartHandler={this.handleTouchStart} touchEndHandler={this.handleTouchEnd}/>
				</div>
				<Link to="/home" className="link">Stop test</Link>
			</div>
		);
	}

	handleTouchStart() {
		console.log('touch'); // ToDo: remove before production
		const { dispatch } = this.props;
		dispatch(recordVoice(this.props.character));
	}

	handleTouchEnd() {
		console.log('touch end'); // ToDo: remove before production
		const { dispatch } = this.props;
		dispatch(recognizeVoice(this.props.character));
	}
}

const mapStateToProps = (state) => {
	return {
		recorderStatus: state.exam.status,
		character: state.exam.character,
		authorized: state.recognizer.authorized
	}
};

export default connect(mapStateToProps)(Exam);