import React from 'react';
import MyName from "../../component/heading/myName";
import Greeting from "../../component/heading/Greeting";
import logo from "../../logo.svg";

const Home = () => {
    const homeContainerStyle = {
        backgroundColor: "black",
    }
    const containerStyle = {
        height: 3000,
        color: "white",
    }
    const introStyle = {
    padding: 100
    }
    const introPictureStyle = {
        display: "flex",
        justifyContent: "flex-start",
    }
    return (
    <div className="home-container" style={homeContainerStyle}>
        <div className="scrolling-container" style={containerStyle}>
            <div className="introduction" style={introStyle}>
                <Greeting>Hello, this is</Greeting>
                <MyName/>
                <div className="introPicture" style={introPictureStyle}>
                    <div style={{width: "35%", lineHeight: 2}}>
                        I'm a Rising Junior at Northeastern University.
                        Currently working as a DevOp intern at WoltersKluwer CloudSRE team.
                    </div>
                    <img src={logo} alt="react logo" style={{width: '40%'}}/>
                </div>
            </div>
        </div>
    </div>);

};



export default Home;

