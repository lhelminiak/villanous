import React, { Component } from 'react';
import '../../../css/nav/components/navButton.css';

import {Motion, spring, presets} from 'react-motion';


// const { Motion, spring, presets } = ReactMotion

export default class NavButton extends Component {

    constructor(props) {
        super(props);

        this.state = {

            navOpen: false,


        };

    }

    componentDidMount(){

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }






    render() {
        const style = {
            position: 'absolute',
            top: 50,
            left: 50,
            height: 50,
            zIndex: 99,


            overflow: 'visible',
            cursor: 'pointer',
            // disable touch highlighting on devices
            WebkitTapHighlightColor: "rgba(0,0,0,0)",
        };





        return (

                <svg
                    viewBox="0 0 96 96"
                    // height="1em"
                    onClick={() => this.setState({navOpen: !this.state.navOpen})}
                    style={style}
                >
                    <Motion
                        style={{
                            x: spring(this.state.navOpen ? 1 : 0, presets.wobbly ),
                            y: spring(this.state.navOpen ? 0: 1, presets.wobbly ),
                        }}
                    >
                        {({ x, y }) =>
                            <g
                                id="navicon"
                                fill="none"
                                stroke="white"
                                strokeWidth="9"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line
                                    transform={`translate(${x * 12}, ${x * -7}) rotate(${x * 45}, 7, 26)`}
                                    x1="7" y1="26" x2="89" y2="26"
                                />
                                <line
                                    transform={`translate(${x * 12}, ${x * 7}) rotate(${x * -45}, 7, 70)`}
                                    x1="7" y1="70" x2="89" y2="70"
                                />
                                <line
                                    transform={`translate(${x * -96})`}
                                    opacity={y}
                                    x1="7" y1="48" x2="89" y2="48"
                                />
                            </g>
                        }
                    </Motion>
                </svg>


        );
    }
};

