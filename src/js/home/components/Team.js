import React, { Component } from 'react';
import '../../../css/home/components/team.css';

import TeamMember from '../components/TeamMember';





export default class Team extends Component {

    constructor(props) {
        super(props);

        this.state = {
            viewTeam: false,


        };

    }

    componentDidMount(){

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }





    render() {

        const TeamList = () => {
            if(this.state.viewTeam){
                //show whole team
                return (
                    <div className="teamListContainer">
                        <TeamMember image="https://picsum.photos/400/400?image=1068" twitchLink={"http://www.twitch.tv"} twitterLink={"http://www.twitter.com"} youtubeLink={'http://www.youtube.com'} name="luke helminiak" role="programmer"/>
                        <TeamMember image="https://picsum.photos/400/400?image=1050" twitchLink={"http://www.twitch.tv"} twitterLink={"http://www.twitter.com"} youtubeLink={'http://www.youtube.com'} name="Jake kramer" role="Founder"/>
                        <TeamMember image="https://picsum.photos/400/400?image=1011" twitchLink={"http://www.twitch.tv"} twitterLink={"http://www.twitter.com"} youtubeLink={'http://www.youtube.com'} name="Bill william" role="Some dude"/>
                        <TeamMember image="https://picsum.photos/400/400?image=1068" twitchLink={"http://www.twitch.tv"} twitterLink={"http://www.twitter.com"} youtubeLink={'http://www.youtube.com'} name="luke helminiak" role="programmer"/>
                        <TeamMember image="https://picsum.photos/400/400?image=1011" twitchLink={"http://www.twitch.tv"} twitterLink={"http://www.twitter.com"} youtubeLink={'http://www.youtube.com'} name="Bill william" role="Some dude"/>
                        <TeamMember image="https://picsum.photos/400/400?image=1068" twitchLink={"http://www.twitch.tv"} twitterLink={"http://www.twitter.com"} youtubeLink={'http://www.youtube.com'} name="luke helminiak" role="programmer"/>
                        <TeamMember image="https://picsum.photos/400/400?image=1011" twitchLink={"http://www.twitch.tv"} twitterLink={"http://www.twitter.com"} youtubeLink={'http://www.youtube.com'} name="Bill william" role="Some dude"/>
                        <TeamMember image="https://picsum.photos/400/400?image=1068" twitchLink={"http://www.twitch.tv"} twitterLink={"http://www.twitter.com"} youtubeLink={'http://www.youtube.com'} name="luke helminiak" role="programmer"/>
                        <TeamMember image="https://picsum.photos/400/400?image=1011" twitchLink={"http://www.twitch.tv"} twitterLink={"http://www.twitter.com"} youtubeLink={'http://www.youtube.com'} name="Bill william" role="Some dude"/>
                        <TeamMember image="https://picsum.photos/400/400?image=1068" twitchLink={"http://www.twitch.tv"} twitterLink={"http://www.twitter.com"} youtubeLink={'http://www.youtube.com'} name="luke helminiak" role="programmer"/>
                    </div>
                );



            } else {
                return (
                    <div className="teamListContainer">
                        <TeamMember image="https://picsum.photos/400/400?image=1068" twitchLink={"http://www.twitch.tv"} twitterLink={"http://www.twitter.com"} youtubeLink={'http://www.youtube.com'} name="luke helminiak" role="programmer"/>
                        <TeamMember image="https://picsum.photos/400/400?image=1050" twitchLink={"http://www.twitch.tv"} twitterLink={"http://www.twitter.com"} youtubeLink={'http://www.youtube.com'} name="Jake kramer" role="Founder"/>
                        <TeamMember image="https://picsum.photos/400/400?image=1011" twitchLink={"http://www.twitch.tv"} twitterLink={"http://www.twitter.com"} youtubeLink={'http://www.youtube.com'} name="Bill william" role="Some dude"/>
                    </div>
                );

            }
        };


        return (
            <div className="teamContainer">
                <div className="teamHeaderContainer">
                    <h4>We Are Villainous</h4>
                    <p>A gaming team that de-risks brave decisions making by being courageous, strategic, smart and driven.</p>
                </div>

                <div className="listContainer"><TeamList/></div>

                <div className="seeFullTeamContainer">
                    <button onClick={() => this.setState({viewTeam: !this.state.viewTeam})} className="seeTeamButton">{ this.state.viewTeam ? "Hide" : "See Team"}</button>
                </div>
            </div>
        );
    }
};

