import React from 'react';
import IntroSection from "./sections/IntroSection";

const Home = () => {
    const homeContainerStyle = {
        backgroundColor: "black",
    }
    const containerStyle = {
        height: 3000,
        color: "white",
    }
    const introStyle = {
    padding: 100,
    paddingTop: 260,
    }

    return (
    <div className="home-container" style={homeContainerStyle}>
        <div className="scrolling-container" style={containerStyle}>
            <IntroSection className="intro-section-container" style={introStyle}/>
        </div>
    </div>);

};



export default Home;

