import React from 'react';
import Fade from 'react-reveal/Fade';
import MyName from "../../../component/heading/myName";
import Greeting from "../../../component/heading/Greeting";
import Zoom from 'react-reveal/Zoom';

import greenMe from "../../../ImageResource/greenMe.png";


const introPictureStyle = {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    }
const textElementStyle = {
    width: "40%",
    display: "flex",
    alignItems: "center",
}


const IntroSection = ({style, className}: any) => {
    const name = <MyName/>
    const textElement = (
        <div style={textElementStyle}>
            <Fade top cascade>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div>
                        <Greeting>Hello, this is</Greeting>
                        {name}
                    </div>
                    <div style={{width: "80%", lineHeight: 2}}>
                        I'm a Rising Junior at Northeastern University.
                        Currently working as a DevOp intern at WoltersKluwer CloudSRE team.
                    </div>
                </div>
            </Fade>
        </div>
    );
return (
    <div className={className} style={style}>

        <div className="introPicture" style={introPictureStyle}>
            {textElement}
            <Zoom>
                <img src={greenMe} alt="me" style={{maxHeight: '80vh', border: "0px solid", borderColor: "white"}}/>
            </Zoom>
        </div>
    </div>
);
}

export default IntroSection;