import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import SearchList from './pages/SearchList';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search/:keyword" component={SearchList} />
    </Switch>
  );
}

export default App;
