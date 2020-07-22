import React, { Fragment } from 'react';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Tabla from '../components/Table';
import '../assets/components/Home.css';

const Home = () => {
	return (
		<Fragment>
			<Header />
			<div className='home'>
				<Menu />
				<div className='tabla'>
					<h3>Tabla de datos</h3>
					<Tabla />
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
