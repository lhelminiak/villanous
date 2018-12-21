import React, { Component } from 'react';
import '../../css/home/homebase.css';



import HomeHeader from './components/Header';
import Team from './components/Team';


export default class HomeBase extends Component {

    constructor(props) {
        super(props);

        this.state = {


        };

    }

    componentDidMount(){

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



            </div>
        );
    }
};

