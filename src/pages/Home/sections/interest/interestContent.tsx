import React from 'react';
import python from './../../../../ImageResource/python.svg';
import javascript from './../../../../ImageResource/javascript.svg';
import ocaml from './../../../../ImageResource/ocaml.svg';
import groovy from './../../../../ImageResource/groovy.png';

const generate = (pname: string, link: string, image: string) => {
   return (
       <div>
            {/*<a href="https://icons8.com/icon/13441/python"></a>*/}
            <a target="_blank"
               rel="noreferrer"
               href={link}
               style={{textDecoration: "inherit", color: "inherit"}}>
                <img style={{width: "1em"}} src={image} alt={pname}/> {pname}
            </a>
        </div>);
}

const interestContent = [
    generate("Python", "https://www.python.org/", python),
    generate("JavaScript", "https://www.javascript.com", javascript),
    generate("OCaml", "https://ocaml.org", ocaml),
    generate("Groovy", "https://groovy-lang.org", groovy),
    ]


export default interestContent;