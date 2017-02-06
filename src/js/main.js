import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './containers/App';
import HomeNav from './components/HomeNav';
import Exam from './containers/Exam';
import Learn from './containers/Learn';
import '../styles/main.scss';

render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomeNav} />
			<Route path="/exam" component={Exam}/>
			<Route path="/learn" component={Learn}/>
		</Route>
	</Router>,
	document.getElementById('app')
);