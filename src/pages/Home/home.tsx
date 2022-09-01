import React from 'react';
import IntroSection from "./sections/IntroSection";
import ProjectSection from "./sections/ProjectSection";
import Divider from "@mui/material/Divider";

import './home.css';

const Home = () => {
    const homeContainerStyle = {
        backgroundColor: "black",
    }
    const containerStyle = {
        height: 3000,
        color: "white",
        padding: 100,
    }
    const introStyle = {
    paddingTop: 250,
    }

    return (
    <div className="home-container" style={homeContainerStyle}>
        <div className="scrolling-container" style={containerStyle}>
            <IntroSection className="intro-section-container" style={introStyle}/>
            <Divider style={{paddingTop: 100, paddingBottom: 100}}/>
            <ProjectSection/>
        </div>
    </div>);

};



export default Home;

