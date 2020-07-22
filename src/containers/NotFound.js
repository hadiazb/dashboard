import React, { Fragment } from 'react';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Fatal from '../components/Fatal';

const NotFound = () => {
	return (
		<Fragment>
			<Header />
			<div className='box'>
				<Menu />
				<Fatal />
			</div>
		</Fragment>
	);
};

export default NotFound;
