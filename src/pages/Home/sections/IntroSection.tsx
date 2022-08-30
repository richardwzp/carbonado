import React from 'react';
import MyName from "../../../component/heading/myName";
import Greeting from "../../../component/heading/Greeting";
import logo from "../../../logo.svg";

const introPictureStyle = {
    display: "flex",
    justifyContent: "flex-start",
    gap: 20,
    }
const textElementStyle = {
    width: "40%",
}


const IntroSection = ({style, className}: any) => {
    const name = <MyName/>
    const textElement = (
        <div style={textElementStyle}>
            <Greeting>Hello, this is</Greeting>
            {name}
            <div style={{width: "80%", lineHeight: 2}}>
                I'm a Rising Junior at Northeastern University.
                Currently working as a DevOp intern at WoltersKluwer CloudSRE team.
            </div>
        </div>
    );
return (
    <div className={className} style={style}>

        <div className="introPicture" style={introPictureStyle}>
            {textElement}
            <img src={logo} alt="react logo" style={{width: '40%', border: "5px solid", borderColor: "white"}}/>
        </div>
    </div>
);
}

export default IntroSection;