import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './components/main';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

function App() {
  // const classes = useStyles();
  return (
    <Router>
      <div>
        <Route component={Main} />
        {/* <Switch>
        <Route
          exact
          path="/products/:name"
          component={SingleProductContainer}
        />
        <Route path="/products" component={ProductsContainer} />
        <Route exact path="/category/:name" component={ProductsContainer} />
        <Route path="/carrito" component={CarritoContainer} />
        <Route path="/profile" component={ProfileUserContainer} />
        <Route exact path="/" component={HomeContainer} />
      </Switch> */}
      </div>
    </Router>

  );
}

export default App;
