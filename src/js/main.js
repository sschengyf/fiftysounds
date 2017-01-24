import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../styles/main.scss';

ReactDOM.render(
	<App name="User"/>,
	document.getElementById('app')
);