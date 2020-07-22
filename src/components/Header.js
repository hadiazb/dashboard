import React from 'react';
import '../assets/components/Header.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';

const Header = () => {
	return (
		<header className='header'>
			<Link className='header__anchor' to='/'>
				<HomeIcon style={{ fontSize: 35 }} />
			</Link>
			<div className='header__search'>
				<Link className='header__anchor' to='/'>
					<SearchIcon style={{ fontSize: 35 }} />
				</Link>
				<Avatar>H</Avatar>
			</div>
		</header>
	);
};

export default Header;
