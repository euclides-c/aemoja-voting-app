import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import pt_PT from "antd/lib/locale/pt_PT";
import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";
import Results from "./components/Results";
import Vote from "./components/Vote";
import Notification from "./components/Notification";

const Root = () => {
  return (
    <ConfigProvider locale={pt_PT}>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/Registration" component={RegistrationForm} />
            <Route exact path="/Vote" component={Vote} />
            <Route exact path="/Results" component={Results} />
            <Route exact path="/notification" component={Notification} />
          </Switch>
        </main>
      </Router>
    </ConfigProvider>
  );
};

export default Root;
