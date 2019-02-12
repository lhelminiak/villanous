import React, { Component } from 'react';
import '../../../css/nav/components/navMenu.css';





export default class NavMenu extends Component {

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
            <div className={this.props.navOpen ? "navMenuContainer navMenuContainer-open": "navMenuContainer navMenuContainer-closed"}>

                <div className="navLinkContainer">
                    <div className="linkHighLight"></div>
                    <h4>Home</h4>
                </div>

                <div className="navLinkContainer">
                    <div className="linkHighLight"></div>
                    <h4>About</h4>
                </div>

                <div className="navLinkContainer">
                    <div className="linkHighLight"></div>
                    <h4>Shop</h4>
                </div>

                <div className="navLinkContainer">
                    <div className="linkHighLight"></div>
                    <h4>blah</h4>
                </div>


            </div>
        );
    }
};

