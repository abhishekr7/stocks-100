import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import logo from './company_logo.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddInvestor from './components/AddInvestor'
import NavBar from './components/layout/NavBar'
import Home from './components/Home'
import Analytics from './components/Analytics'

function App() {
  return (

    <BrowserRouter>
        <div className="App">

            <NavBar />

            <Switch>
                <Route path = '/home' component={Home}/>
                <Route path = '/analytics' component={Analytics}/>
                <Route path = '/add' component={AddInvestor}/>
            </Switch>

        </div>
    </BrowserRouter>
  );
}

export default App;
