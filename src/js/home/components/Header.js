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
                    <img className="headerLogo" src="https://firebasestorage.googleapis.com/v0/b/code-store-cac5b.appspot.com/o/images%2Flogo.png?alt=media&token=cdb741d8-3006-4b18-b2b2-86d41ba065aa" alt="logo"/>
                </div>

            </div>
        );
    }
};

