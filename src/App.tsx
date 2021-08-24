import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import Vote from './pages/Vote';

const Root = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/Registration' component={RegistrationForm} />
				<Route exact path='/Vote' component={Vote} />
			</Switch>
		</Router>
	);
};

export default Root;
