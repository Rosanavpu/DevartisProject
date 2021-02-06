import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Main from './components/main';
import Feed from './components/feed';
import Register from './components/register';
import LogIn from './components/login';

function App() {
  const userState = useSelector(state => state.userReducer)
  return (
    <Router>
      <div>
        <Route component={Main} />
        <Switch>
          {userState.user.hasOwnProperty("access_token") ?
            <Route exact path="/" component={Feed} />
            : null}
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
