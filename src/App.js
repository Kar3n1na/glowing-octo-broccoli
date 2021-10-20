import React from "react";
import { Provider } from "react-redux";
import configStore from "./configStore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Login from "./components/Authentication/Login";

const store = configStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={DashBoard} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
