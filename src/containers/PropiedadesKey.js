import React, { Component, Fragment } from 'react';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Detalle from '../components/Detalle';
import '../assets/components/Propiedades.css';

class Propiedades extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id_key: this.props.location.pathname.replace(
				'/propiedades/',
				''
			),
		};
	}

	render() {
		return (
			<Fragment>
				<Header />
				<div className='container-tabla'>
					<Menu />
					<Detalle id={this.state.id_key} />
				</div>
			</Fragment>
		);
	}
}

export default Propiedades;
