import React, { Component } from 'react';
import '../../../css/home/components/clothing.css';




export default class Clothing extends Component {

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

            <div className="clothingSection">

                <div className="clothingSectionHeader">
                    <h4>Become Villainous</h4>
                </div>

                <div className="clothingContainer">
                    <img alt="clothingImage" className="clothingImage" src="https://firebasestorage.googleapis.com/v0/b/villainous-2aecc.appspot.com/o/Villainous-Jacket-Front.png?alt=media&token=8a5b5314-c51a-4fd6-a1de-a504fa8e056a" />
                    <img alt="clothingImage" className="clothingImage" src="https://firebasestorage.googleapis.com/v0/b/villainous-2aecc.appspot.com/o/Villainous-Non-Sub-Hoodie.png?alt=media&token=7d539139-dca5-4f88-897b-d7586d569c11" />
                    <img alt="clothingImage" className="clothingImage" src="https://firebasestorage.googleapis.com/v0/b/villainous-2aecc.appspot.com/o/Villainous-Polo-Dark-Heather.png?alt=media&token=bc57e0d7-38d7-45d7-b509-bbe39974e1b9" />
                    <img alt="clothingImage" className="clothingImage" src="https://firebasestorage.googleapis.com/v0/b/villainous-2aecc.appspot.com/o/Villainous-SnapBack.png?alt=media&token=3c511348-c528-4c58-92bd-7f5ecc220845" />
                </div>
            </div>
        );
    }
};

