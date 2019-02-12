import React, { Component } from 'react';
import '../../../css/home/components/header.css';
import Cover from 'react-video-cover';







export default class HomeHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',
            resizeNotifier: () => {},



        };

    }

    componentDidMount(){

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }





    render() {
        const videoOptions = {
            src: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
            autoPlay: true,
            muted: true,
            loop: true,
        };


        return (
            <div className="homeHeader">
                <Cover
                    videoOptions={videoOptions}
                    remeasureOnWindowResize
                    getResizeNotifier={resizeNotifier => {
                        this.setState({
                            resizeNotifier,
                        });
                    }}
                />


                <div className="homeHeaderOverlay">
                    <img className="headerLogo" src="https://firebasestorage.googleapis.com/v0/b/villainous-2aecc.appspot.com/o/mascot%20%2B%20text%20(stroke).png?alt=media&token=eb0a45ad-ba51-4a47-ae20-f130852df2cd" alt="logo"/>
                </div>

            </div>
        );
    }
};

