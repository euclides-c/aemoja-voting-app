import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import Vote from './pages/Vote';

const Root = () => {
	return (
		<Router>
			<Header />
			<main>
				<Switch>
					<Route exact path='/Registration' component={RegistrationForm} />
					<Route exact path='/Vote' component={Vote} />
					<Route exact path='/Header' component={Header} />
				</Switch>
			</main>
		</Router>
	);
};

export default Root;
