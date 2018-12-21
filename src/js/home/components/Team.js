import React, { Component } from 'react';
import '../../../css/home/components/team.css';

import TeamMember from '../components/TeamMember';





export default class Team extends Component {

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
            <div className="teamContainer">
                <div className="teamHeaderContainer">
                    <h4>We Are Villainous</h4>
                    <p>A creative agency that de-risks brave commercial decision making by being creatively courageous, strategically forensic, digitally progressive, data smart and behaviour driven.</p>
                </div>

                <div className="listContainer">
                    <div className="teamListContainer">
                        <TeamMember image="https://picsum.photos/400/400?image=1068" twitchLink={"http://www.twitch.tv"} twitterLink={"http://www.twitter.com"} youtubeLink={'http://www.youtube.com'} name="luke helminiak" role="programmer"/>
                        <TeamMember image="https://picsum.photos/400/400?image=1050" twitchLink={"http://www.twitch.tv"} twitterLink={"http://www.twitter.com"} youtubeLink={'http://www.youtube.com'} name="Jake kramer" role="Founder"/>
                        <TeamMember image="https://picsum.photos/400/400?image=1011" twitchLink={"http://www.twitch.tv"} twitterLink={"http://www.twitter.com"} youtubeLink={'http://www.youtube.com'} name="Bill william" role="Some dude"/>
                        <TeamMember image="https://picsum.photos/400/400?image=1068" twitchLink={"http://www.twitch.tv"} twitterLink={"http://www.twitter.com"} youtubeLink={'http://www.youtube.com'} name="luke helminiak" role="programmer"/>
                    </div>
                </div>







            </div>
        );
    }
};

