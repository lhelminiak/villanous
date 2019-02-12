import React, { Component } from 'react';
import '../../css/gamepage/gamepage.css';

import TeamMember from '../../js/home/components/TeamMember';


// import TeamMember from '../components/TeamMember';
// https://firebasestorage.googleapis.com/v0/b/code-store-cac5b.appspot.com/o/images%2FcodLogo-white.png?alt=media&token=34c79eb5-4436-49ed-92a8-f634ec6d0e42

const fortnite = {id: 0,
    title: 'Fortnite',
    logoUrl: 'https://firebasestorage.googleapis.com/v0/b/code-store-cac5b.appspot.com/o/images%2FfortniteLogo-white.png?alt=media&token=294ada4c-880c-4e17-928e-6f1e178c521a',
    overviewText: 'Fortnite brings onboard four of the deadliest slayers to touch down on Tilted Towers. Early on, the squad of Kenneth ‘BaldyKun’ Anderson, Robert ‘WizKay’ Simone, Marco ‘MarkyWap’ Soto, and Dade ‘Dramas’ Lesch set the game’s standard for the relentless ferocity and takedowns you can expect from a competitive match of Epic Game’s biggest hit.',
    headerImage: "https://greenwall-gg.s3.amazonaws.com/teams/header/greenwall-expanded-cod-team-bgnd.jpg",
    members: [{id: 0, name: 'Luke', image: 'https://picsum.photos/400/400?image=1068', twitchLink: "http://www.twitch.tv", twitterLink: "http://www.twitter.com", youtubeLink: 'http://www.youtube.com', role: 'fortnite steamer'},
        {id: 0, name: 'Jake', image: 'https://picsum.photos/400/400?image=1050', twitchLink: "http://www.twitch.tv", twitterLink: "http://www.twitter.com", youtubeLink: 'http://www.youtube.com', role: 'fortnite steamer'},
        {id: 0, name: 'Bill', image: 'https://picsum.photos/400/400?image=1011', twitchLink: "http://www.twitch.tv", twitterLink: "http://www.twitter.com", youtubeLink: 'http://www.youtube.com', role: 'fortnite steamer'}]

};


const cod = {id: 1,
    title: 'Call of Duty',
    logoUrl: 'https://firebasestorage.googleapis.com/v0/b/code-store-cac5b.appspot.com/o/images%2FfortniteLogo-white.png?alt=media&token=294ada4c-880c-4e17-928e-6f1e178c521a',
    overviewText: 'Originally founded in 2006 as a sniping team, the OpTic Call of Duty squad is the foundation and origin of what is now North America\'s most famous and competitively successful esports organization - the first brick of what would eventually be known as the Green Wall. Long may it stand.',
    headerImage: "https://greenwall-gg.s3.amazonaws.com/teams/header/greenwall-expanded-gears.jpg",
    members: [{id: 0, name: 'Todd', image: 'https://picsum.photos/400/400?image=1068', twitchLink: "http://www.twitch.tv", twitterLink: "http://www.twitter.com", youtubeLink: 'http://www.youtube.com', role: 'COD steamer'},
        {id: 0, name: 'william', image: 'https://picsum.photos/400/400?image=1050', twitchLink: "http://www.twitch.tv", twitterLink: "http://www.twitter.com", youtubeLink: 'http://www.youtube.com', role: 'COD steamer'},
        {id: 0, name: 'Ted', image: 'https://picsum.photos/400/400?image=1011', twitchLink: "http://www.twitch.tv", twitterLink: "http://www.twitter.com", youtubeLink: 'http://www.youtube.com', role: 'COD steamer'}]

};












export default class GamePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gameObj: fortnite,




        };

    }

    componentDidMount(){

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }





    render() {

        const teamMembers = this.state.gameObj.members.map((member, i) =>
            <TeamMember key={i} image={member.image} twitchLink={member.twitchLink} twitterLink={member.twitterLink} youtubeLink={member.youtubeLink} name={member.name} role={member.role}/>

        );





        return (
            <div className="gamePage">

                <div style={{backgroundImage: 'url(' + this.state.gameObj.headerImage + ')'}} className="gamePageHeader">
                    <h1>{this.state.gameObj.title}</h1>
                    <div className="gameSelectContainer">
                        <div style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/code-store-cac5b.appspot.com/o/images%2FfortniteLogo-white.png?alt=media&token=294ada4c-880c-4e17-928e-6f1e178c521a)'}} onClick={() => this.setState({gameObj: fortnite})} className="gameSelectLogo"></div>
                        <div style={{backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/code-store-cac5b.appspot.com/o/images%2FcodLogo-white.png?alt=media&token=34c79eb5-4436-49ed-92a8-f634ec6d0e42)'}} onClick={() => this.setState({gameObj: cod})} className="gameSelectLogo"></div>
                    </div>
                </div>




                <div className="overviewAndAchievements">
                    <div className="overviewContainer">
                        <h4>Overview</h4>
                        <p>{this.state.gameObj.overviewText}</p>
                    </div>
                    <div className="achievementsContainer">
                        <h4>Achievements</h4>
                    </div>
                </div>






                <div className="currentRosterHeader greyBackground">
                    <h4>Current Roster</h4>
                </div>

                <div className="listContainer greyBackground">
                    <div className="teamListContainer">
                        {teamMembers}
                    </div>
                </div>




            </div>
        );
    }
};

