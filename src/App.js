import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './componants/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './NoMatch/NoMatch';
import FriendDetail from './componants/FriendDetails/FriendDetail';

function App() {
 
  return (
    <Router>
    <Switch>
      <Route path='/home'>
      <Home></Home>
      </Route>
      <Route path='/friend/:friendId'>
      <FriendDetail></FriendDetail>
      </Route>
      <Route exact path='/'>
      <Home></Home>
      </Route>
      <Route path="*">
            <NoMatch/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
