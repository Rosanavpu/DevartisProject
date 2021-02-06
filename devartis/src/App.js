import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './components/main';
import Register from './components/register';
import LogIn from './components/login';

function App() {
  return (
    <Router>
      <div>
        <Route component={Main} />
        <Switch>
          <Route
            exact
            path="/register"
            component={Register}
          />
          <Route
            exact
            path="/logIn"
            component={LogIn}
          />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
