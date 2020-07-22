import React, { Fragment } from 'react';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Detalle from '../components/Detalle';
import '../assets/components/Propiedades.css';

const Propiedades = () => {
	return (
		<Fragment>
			<Header />
			<div className='container-tabla'>
				<Menu />
				<Detalle />
			</div>
		</Fragment>
	);
};

export default Propiedades;
