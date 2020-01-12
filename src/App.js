import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import { Spring } from 'react-spring'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Analytics from './components/Analytics'

function App() {
  return (

    <BrowserRouter>
        <div className="App">

            <Switch>
                <Route path = '/' component={Analytics}/>
            </Switch>

        </div>
    </BrowserRouter>
  );
}

export default App;
