import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import App from './containers/App';
import HomeNav from './components/HomeNav';
import Exam from './containers/Exam';
import Learn from './containers/Learn';
import '../styles/main.scss';

let store = configureStore();

render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={HomeNav} />
				<Route path="/exam" component={Exam}/>
				<Route path="/learn" component={Learn}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);