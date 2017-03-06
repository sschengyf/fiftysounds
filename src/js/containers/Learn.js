import React from 'react';
import { Link } from 'react-router';

export default class Learn extends React.Component {
	render() {
        const backStr = '< Go back';

		return (
			<div className='learn page'>
                <div className='learn__page__placeholder'>
                    <h1>Coming soon</h1>
                </div>
                <Link to="/home" className="link learn__page__stoplink">{backStr}</Link>
            </div>
		);
	}
}