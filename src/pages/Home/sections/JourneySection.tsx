import React from 'react';
import JourneyCard from "../../../component/journeyCards/JourneyCard";
import Fade from 'react-reveal/Fade';

const description = "For my first Co-op (Cooperative education positions), I work as a member of the Cloud SRE team to " +
    "maintain and provision critical components in the cloud infrastructure. " +
    "The goal of our team is to automate the build/release process, " +
    "deploy domain application with scalability, reliability, and availability. " +
    "I worked with various cloud provision, orchestration, and automation tools like Terraform, Kubernetes, and Jenkins. " +
    "It is fascinating how all these different technology integrates with each other " +
    "to standardize and automate the development process. " +
    "I enjoyed devOp's unique culture of collaboration, and its deep connection with the open source community. " +
    "There's so much more to learn, and I'm exited to see what the rest of this " +
    "experience will bring me!"
const title = "DevOp engineering intern"

const JourneySection = () => {
   return (
          <div>

             <Fade bottom >
             <JourneyCard company="Wolterskluwer" title={title} time="July 2022 - now" description={description}/>

             </Fade>
          </div>
   );
}

export default JourneySection;