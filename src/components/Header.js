import React from 'react';
import '../assets/components/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link className='header__anchor' to='#'>Estadisticas</Link>
      <Link className='header__anchor' to='#'>Login</Link>
    </header>
  );
};

export default Header;