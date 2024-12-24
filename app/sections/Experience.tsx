"use client";
import { experienceData } from "../constant/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { WorkflowIcon } from "lucide-react";
const Experience = () => {
  return (
    <div className="w-full py-32  px-2 flex flex-col items-center justify-center overflow-hidden -z-10">
      <h2 className="text-center uppercase text-3xl">Experiences</h2>
      <VerticalTimeline className="-z-10">
        {experienceData.map((exp) => (
          <VerticalTimelineElement
            key={exp.id}
            className="vertical-timeline-element--work "
            contentStyle={{ background: "rgb(3, 161, 252)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={exp.timeWork}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkflowIcon />}
          >
            <h3 className="vertical-timeline-element-title text-lg font-bold">{exp.position}</h3>
            <h4 className="vertical-timeline-element-subtitle italic font-thin">{exp.companyName}</h4>
            {exp.decription.split(" -").map((part, index) => (
              <p key={index} className="text-gray-900 font-mono">
                {index !== 0 && " -"} {part.trim()}
              </p>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
