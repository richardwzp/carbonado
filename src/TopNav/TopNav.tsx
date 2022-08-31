import React from 'react';
import './topNav.css';
import {ReactComponent as LogoMark} from "../ImageResource/Rmark.svg";

const TopNav = () => {
   return (
       <div className="navContainer">
           <nav className="navbar">
               <LogoMark className="svgLogo"/>
           </nav>
       </div>
   );
}


export default TopNav