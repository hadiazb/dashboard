import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Propiedades from '../containers/PropiedadesKey';
import Statistic from '../containers/Statistic';

function App() {
	return (
		<Router>
			<Switch>
				<Route
					exact
					path='/propiedades/:key'
					component={Propiedades}
				/>
				<Route exact path='/' component={Home} />
				<Route exact path='/estadisticasall' component={Statistic} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;
