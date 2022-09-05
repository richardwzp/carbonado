import React from 'react';
import Fade from 'react-reveal/Fade';
import MyName from "../../../../component/heading/myName";
import Greeting from "../../../../component/heading/Greeting";
import Zoom from 'react-reveal/Zoom';

// import greenMe from "../../../../ImageResource/greenMe.png";
import greenMe2 from "../../../../ImageResource/greenMe2.png";


const introPictureStyle = {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    }
const textElementStyle = {
    width: "42%",
    display: "flex",
    alignItems: "center",
}


const IntroSection = ({style, className}: any) => {
    const name = <MyName/>
    const textElement = (
        <div style={textElementStyle}>
            <Fade top cascade>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{width: "100%"}}>
                        <Greeting>Hello, this is</Greeting>
                        {name}
                    </div>
                    <div style={{width: "95%", lineHeight: 2}}>
                        I am a rising junior at Northeastern University studying Computer Science with a software concentration.
                        <br/>
                        A Programming language enthusiast, avid D&D player/DM, fantasy artist, comic-book fan, and cinephile.
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
                <img src={greenMe2} alt="me" style={{maxHeight: '80vh', border: "0px solid", borderColor: "white"}}/>
            </Zoom>
        </div>
    </div>
);
}

export default IntroSection;