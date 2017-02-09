import React from 'react';
import HomeNavItem from 'components/HomeNavItem';

export default class Home extends React.Component {
	render() {
		return (
			<nav className='homenav page'>
				<HomeNavItem path='exam' name='Start the test' style='green'/>
				<HomeNavItem path='learn' name='Learn alphabets' style='yellow'/>
			</nav>
		);
	}
}