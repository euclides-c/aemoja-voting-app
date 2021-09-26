import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import pt_PT from 'antd/lib/locale/pt_PT';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import Results from './components/Results';
import Vote from './pages/Vote';
import RegistrationFailed from './components/Result/RegistrationFailed';
import RegistrationSuccessful from './components/Result/RegistrationSuccessful';
import VoteSuccessful from './components/Result/VoteSuccessful';
import VoteFailed from './components/Result/VoteFailed';

const Root = () => {
	return (
		<ConfigProvider locale={pt_PT}>
			<Router>
				<Header />
				<main>
					<Switch>
						<Route exact path='/Registration' component={RegistrationForm} />
						<Route exact path='/Vote' component={Vote} />
						<Route exact path='/Results' component={Results} />
						{/* <Route exact path='/Results' component={Results} /> */}

						{/* Refactor this */}
						<Route exact path='/success' component={RegistrationSuccessful} />
						<Route exact path='/error' component={RegistrationFailed} />
						<Route exact path='/votesuccess' component={VoteSuccessful} />
						<Route exact path='/voteerror' component={VoteFailed} />
					</Switch>
				</main>
			</Router>
		</ConfigProvider>
	);
};

export default Root;
