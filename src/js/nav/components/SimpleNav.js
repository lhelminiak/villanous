import React, { Component } from 'react';
import '../../../css/nav/simpleNav.css';
import { Link } from 'react-router-dom'
import history from '../../../js/history';














export default class SimpleNav extends Component {

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

    navigateHome = () => {
        history.push('/');
    };



    render() {







        return (
            <div className="simpleNav">
                <div onClick={this.navigateHome} className="leftContainer"></div>

                <div className="centerContainer">

                    <Link to="/games"><span>Teams</span></Link>
                    <Link to="/games"><span>Watch</span></Link>
                    <Link to="/games"><span>Partners</span></Link>
                    <Link to="/games"><span>About</span></Link>

                    <div className="shopButton"><p>SHOP</p></div>

                </div>

                <div className="rightContainer"></div>

            </div>
        );
    }
};

