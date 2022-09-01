import React from 'react';
import IntroSection from "./sections/IntroSection";
import ProjectSection from "./sections/ProjectSection";
import JourneySection from "./sections/JourneySection";
import Divider from "@mui/material/Divider";

import './home.css';

const Home = () => {
    const homeContainerStyle = {
        backgroundColor: "black",
    }
    const introStyle = {
    paddingTop: 10,
        justifyContent: "center",
    }

    return (
    <div className="home-container" style={homeContainerStyle}>
        <div className="scrolling-container">
            <IntroSection className="intro-section-container" style={introStyle}/>
            <Divider style={{paddingTop: 100, paddingBottom: 100}}/>
            <ProjectSection/>
            <Divider style={{paddingTop: 100, paddingBottom: 100}}/>
            <JourneySection/>

        </div>
    </div>);

};



export default Home;

