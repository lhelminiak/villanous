import React, { Component } from 'react';
import '../../css/home/homebase.css';

import HomeHeader from './components/Header';
import Team from './components/Team';
import Games from './components/Games';
import Clothing from './components/Clothing';




export default class HomeBase extends Component {

    constructor(props) {
        super(props);

        this.state = {


        };

    }

    componentDidMount(){
        window.scrollTo(0,0);

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }






    render() {




        return (
            <div className="homeBase">
                <HomeHeader/>
                <Team/>
                <Games/>
                <Clothing/>

            </div>
        );
    }
};

