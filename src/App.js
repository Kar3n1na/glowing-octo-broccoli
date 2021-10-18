import React from "react";
import { Provider } from "react-redux";
import configStore from "./configStore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authentication from "./components/Authentication";
import DashBoard from "./components/DashBoard";

const store = configStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Authentication} />
          <Route exact path="/dashboard" component={DashBoard} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
