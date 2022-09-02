import React from 'react';
import './interestSection.css';
import python from './../../../../ImageResource/python.svg';
import interestContent from "./interestContent";

const InterestBLock = ({name, entry}: any) => {
    return (
       <div>
           <div style={{fontSize: "150%"}}> {name} </div>
           <ul>{entry.map((a: any, index: number) => (<li key={index}>{a}</li>))}</ul>
       </div>
    );
}

const InterestSection = () => {

    return (
        <div style={{display: "flex", flexDirection: "column", width: "100%", paddingLeft: "50px"}}>
            <div className="titleName">My Interest</div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <InterestBLock
                    name="Programming Language"
                    entry={interestContent}/>
            </div>
        </div>
    );
}

export default InterestSection;


