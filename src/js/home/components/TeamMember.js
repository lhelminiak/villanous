import React, { Component } from 'react';
import '../../../css/home/components/teamMember.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {   } from '@fortawesome/free-solid-svg-icons'
import {faTwitch, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'







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
            <div className="teamMemberContainer">
                <img src={this.props.image} alt="" className="teamMemberImage"/>
                <div className="teamMemberImage-overlay"></div>



                <div className="teamMemberInfoContainer">
                    <div className="teamMemberInfo">
                        <div className="infoColumn">
                            <h4 className="name">{this.props.name}</h4>
                        </div>

                        <div className="infoColumn">
                            <p className="role">{this.props.role}</p>
                        </div>

                        <div className="infoColumn">
                            <div className="socialsContainer">
                                <div  className="iconContainer">
                                    <FontAwesomeIcon icon={faTwitch} color="#6441a5"/>
                                    <a href={this.props.twitchLink} target="_blank" className="socialLink"></a>
                                </div>
                                <div className="iconContainer">

                                    <FontAwesomeIcon icon={faTwitter} color="#00aced"/>
                                    <a href={this.props.twitterLink} target="_blank" className="socialLink"></a>
                                </div>
                                <div className="iconContainer">

                                    <FontAwesomeIcon icon={faYoutube} color="#cc181e"/>
                                    <a href={this.props.youtubeLink} target="_blank" className="socialLink"></a>
                                </div>
                            </div>


                            <div className="flagContainer">

                            </div>

                        </div>


                    </div>
                </div>

            </div>
        );
    }
};

