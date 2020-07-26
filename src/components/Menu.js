import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/components/Main.css';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { rgbToHex } from '@material-ui/core';

const Menu = () => {
	return (
		<div className='main'>
			<Link to='/estadisticasall'>
				<EqualizerIcon fontSize="large" color="inherit"/>
			</Link>
		</div>
	);
};

export default Menu;
