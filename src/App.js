import React from 'react';
import { Route, Switch } from 'react-router';

import './App.css';
import PatternPage from './pages/PatternPage';

function App() {
  return (
    <Switch>
      <Route path="/sample" component={PatternPage} />
    </Switch>
  );
}

export default App;
