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


            </div>
        );
    }
};

