import React, { Component } from 'react';
import history from './js/history';
import {Route, Router} from "react-router-dom"
import './App.css';

//components
import NavButton from '../src/js/nav/components/NavButton';
import NavMenu from '../src/js/nav/components/NavMenu';
import SimpleNav from '../src/js/nav/components/SimpleNav';





//pages
import HomeBase from '../src/js/home/HomeBase'
import GamePage from '../src/js/gamepage/GamePage';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            navOpen: false,

        };

    }

    componentDidMount(){

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    toggleNav = () => {
        console.log('toggling');

        this.setState({navOpen: !this.state.navOpen});
    };



    render() {
        return (
            <Router history={history}>
                <div className="App">

                    {/*<NavButton navOpen={this.state.navOpen} toggleNav={this.toggleNav}/>*/}
                    {/*<NavMenu navOpen={this.state.navOpen}/>*/}
                    <SimpleNav/>




                  <div>
                      <Route exact={true} path='/' component={HomeBase} />
                      <Route path='/games' component={GamePage}/>
                  </div>

                </div>
            </Router>
        );
    }
}

export default App;
