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
import NavBar from './components/navBar';


function App() {
  const userState = useSelector(state => state.userReducer)
  return (
    <Router>
      <div>
        <Route component={NavBar} />
        <Switch>
          {userState.user.hasOwnProperty("access_token") ?
            <Route exact path="/" component={Feed} />
            : <Route
              exact
              path="/"
              component={Main}
            />}
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
