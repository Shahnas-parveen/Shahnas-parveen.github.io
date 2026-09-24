import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

const ExperienceCard: React.FC<TExperience> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.shortLabel}
      iconStyle={{ background: "#915EFF" }}
      icon={
        <div className="flex h-full w-full items-center justify-center text-[18px] font-black text-white">
          {experience.companyName.charAt(0)}
        </div>
      }
    >
      <div>
        <h3 className="text-[20px] font-bold text-white sm:text-[22px]">
          {experience.title}
        </h3>
        <p className="text-secondary text-[15px] font-semibold" style={{ margin: 0 }}>
          {experience.companyName}
        </p>
        <p className="text-secondary mt-1 text-[12px] uppercase tracking-wider">
          {experience.duration}
        </p>
        <p className="mt-2 text-[13px] font-semibold text-[#915EFF]">
          Project: {experience.project}
        </p>
      </div>

      <p className="text-white-100 mt-4 text-[14px] leading-[22px] tracking-wide">
        {experience.description}
      </p>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
