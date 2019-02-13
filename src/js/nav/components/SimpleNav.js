import React, { Component } from 'react';
import '../../../css/nav/simpleNav.css';
import { Link } from 'react-router-dom'
import history from '../../../js/history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitch, faTwitter, faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons'















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

    toShop = () => {
        window.open("https://aporiacustoms.com/stores/villainous/", "_blank");
    };

    toTwitch = () => {
        window.open("https://www.twitch.tv/team_villainous", "_blank");
    };

    toTwitter = () => {
        window.open("https://twitter.com/Villainous_Team", "_blank");
    };

    toYoutube = () => {
        window.open("https://www.youtube.com/channel/UCP_WLhGqtjn2ocKtuytMS3Q", "_blank");
    };

    toInstagram = () => {
        window.open("https://www.instagram.com/teamvillainous/", "_blank");
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

                    <div onClick={this.toShop} className="shopButton"><p>SHOP</p></div>

                </div>

                <div className="rightContainer">
                    <FontAwesomeIcon onClick={this.toTwitch} icon={faTwitch} color="white"/>
                    <FontAwesomeIcon onClick={this.toTwitter} icon={faTwitter} color="white"/>
                    <FontAwesomeIcon onClick={this.toYoutube} icon={faYoutube} color="white"/>
                    <FontAwesomeIcon onClick={this.toInstagram} icon={faInstagram} color="white"/>

                </div>

            </div>
        );
    }
};

