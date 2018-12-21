import React, { Component } from 'react';
import '../../../css/home/components/games.css';

import TeamMember from '../components/TeamMember';





export default class Games extends Component {

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
            <div className="gamesContainer">
                <div className="whatWerePlaying">
                    <h4>What we're streaming...</h4>
                </div>

                <div className="gameLogosContainer">
                    <img className="gameLogoImage" src='https://firebasestorage.googleapis.com/v0/b/code-store-cac5b.appspot.com/o/images%2FcodLogo-white.png?alt=media&token=34c79eb5-4436-49ed-92a8-f634ec6d0e42' />
                    <img className="gameLogoImage" src='https://firebasestorage.googleapis.com/v0/b/code-store-cac5b.appspot.com/o/images%2FfortniteLogo-white.png?alt=media&token=294ada4c-880c-4e17-928e-6f1e178c521a' />
                </div>

                <div className="seeMoreGamesContainer">
                    <button className="seeMoreButton">See more</button>
                </div>



            </div>
        );
    }
};

