import React, { Component } from 'react';
import history from './js/history';
import {Route, Router} from "react-router-dom"
import './App.css';

//components
import NavButton from '../src/js/nav/components/NavButton';



//pages
import HomeBase from '../src/js/home/HomeBase'

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="App">

                    <NavButton/>




                  <div>
                      <Route exact={true} path='/' component={HomeBase} />


                  </div>

                </div>
            </Router>
        );
    }
}

export default App;
