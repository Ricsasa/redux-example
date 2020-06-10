import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Cart, Categories } from './views';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route
          exact
          path="/"
          component={Home} />
        <Route
          exact
          path="/cart"
          component={Cart} />
        <Route
          exact
          path="/categories"
          component={Categories} />
      </Switch>

    </Router>
  );
}

export default App;
