"use client";
import { experienceData } from "../constant/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {WorkflowIcon } from "lucide-react";
const Experience = () => {
  return (
    <div className="w-full py-32  px-2 flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-center uppercase text-3xl">Experiences</h2>
      <VerticalTimeline>
        {experienceData.map((exp) => (
          <VerticalTimelineElement
            key={exp.id}
            className="vertical-timeline-element--work -z-10"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={exp.timeWork}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkflowIcon />}
          >
            <h3 className="vertical-timeline-element-title">{exp.position}</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>{exp.decription}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
