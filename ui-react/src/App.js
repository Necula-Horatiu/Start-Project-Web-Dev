import { HashRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Nav from './pages/Nav/Nav'
import Main from './pages/Main/Main'

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/" component={Nav} exact/>
        <Route path="/main" component={Main} exact/>
      </Switch>
    </HashRouter>
  );
}

export default App;
