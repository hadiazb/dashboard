import React, { Fragment } from 'react';
import Menu from '../components/Menu';
import Header from '../components/Header';
import '../assets/components/Home.css';
import { GraphOne } from '../components/GraphOne';

const Statistic = () => {
	return (
		<Fragment>
			<Header />
			<div className='home'>
				<Menu />
				<div className='tabla'>
					<h3>Estadisticas Generales</h3>
					<GraphOne />
				</div>
			</div>
		</Fragment>
	);
};

export default Statistic;
