import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VotingCards from './components/VotingCards';
import RegistrationForm from './components/RegistrationForm';

const Root = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/Registration' component={RegistrationForm} />
				<Route exact path='/Vote' component={VotingCards} />
			</Switch>
		</Router>
	);
};

export default Root;
