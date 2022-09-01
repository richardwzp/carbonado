import React, { useRef } from 'react';
import BaseCard from "../../../component/projectcards/BaseCard";
import projectContent from "./projectContent";
import './projectSection.css';
import Fade from "react-reveal/Fade";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

const ProjectSection = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        triggerOnce: true,
        threshold: 0,
    });
    useEffect(()=>{
        //do something here when inView is true
    }, [inView])

    return (
        <div className="projectSection" ref={ref}>
            {projectContent.map(({title, description, image, alt}, index) => (
                inView? (<Fade bottom delay={index / 10}>
                    <div className="projectCard " id={title}>
                        <BaseCard
                        description={description}
                        imageAlt={alt}
                        image={image}
                        title={title}
                        minHeight={400}/>
                    </div>
                </Fade>) : null
                )
            )}
        </div>
    );
}

export default ProjectSection;