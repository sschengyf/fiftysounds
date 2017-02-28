import React from 'react';
import { getCharacter } from 'utils/CharacterUtils';
import Paper from 'components/Paper';
import RecordButton from 'components/RecordButton';
import { connect } from 'react-redux';
import {
	refreshCharacter,
	startToRecordVoice,
	stopToRecognizeVoice,
	checkRecognizerPermission,
	requestRecognizerPermission
} from 'actions/ExamActions';
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
  		dispatch(refreshCharacter());
  	}

	render() {
		return (
			<div className='exam page'>
				{this.getExamContent()}
				<Link to="/home" className="link">Stop test</Link>
			</div>
		);
	}

	getExamContent() {
		if ('recognized' === this.props.recorderStatus) {
			return (
				<div>
					<h1 className={this.props.correct ? 'exam__result exam__result--correct' : 'exam__result exam__result--incorrect'}>{this.props.correct ? 'Correct!' : 'Incorrect!'}</h1>
					<div className='result__center'>
						<Paper character={this.props.character}/>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<h1 className='exam__intro'>Please pronounce alphabet below</h1>
					<div className='exam__center'>
						<Paper alphabet={this.props.character.data.display}/>
						<RecordButton {...this.props} touchStartHandler={this.handleTouchStart} touchEndHandler={this.handleTouchEnd}/>
					</div>
				</div>
			);
		}
	}

	handleTouchStart() {
		console.log('touch'); // ToDo: remove before production
		const { dispatch, authorized } = this.props;
		if (!authorized) {
			dispatch(requestRecognizerPermission());
		} else {
			dispatch(startToRecordVoice(this.props.character));
		}
	}

	handleTouchEnd() {
		console.log('touch end'); // ToDo: remove before production
		const { dispatch, authorized } = this.props;
		if (authorized) {
			dispatch(stopToRecognizeVoice(this.props.character));
		}
	}
}

const mapStateToProps = (state) => {
	return {
		recorderStatus: state.exam.status,
		character: state.exam.character,
		correct: state.exam.correct,
		authorized: state.recognizer.authorized
	}
};

export default connect(mapStateToProps)(Exam);