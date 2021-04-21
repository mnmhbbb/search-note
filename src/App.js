import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
