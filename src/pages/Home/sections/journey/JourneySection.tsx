import React from 'react';
import JourneyCard from "../../../../component/journeyCards/JourneyCard";
import Fade from 'react-reveal/Fade';
import journeyContent from "./journeyContent";
import './journeyContent.css';
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";


const JourneySection = () => {
    const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
    });
    useEffect(()=>{
        //do something here when inView is true
    }, [inView])
   return (
          <div ref={ref}>
                 <div className="journeyContentContainer">
                 {journeyContent.map(
                     ({
                          company,
                          title,
                          time,
                          description},
                      index) =>
                         inView?
                         (<Fade bottom>
                             <div>
                                <JourneyCard
                                    key={index}
                                    company={company}
                                    title={title}
                                    time={time}
                                    description={description}/>
                             </div>
                         </Fade>) : null)}
                 </div>

          </div>
   );
}

export default JourneySection;