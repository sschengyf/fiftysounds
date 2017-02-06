import React from 'react';
import HomeNavItem from 'components/HomeNavItem';

export default class Home extends React.Component {
	render() {
		return (
			<nav className='homenav'>
				<HomeNavItem path='exam' name='Start the test'/>
				<HomeNavItem path='learn' name='Learn alphabets'/>
			</nav>
		);
	}
}