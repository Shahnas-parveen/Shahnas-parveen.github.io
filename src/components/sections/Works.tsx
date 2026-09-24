import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const bannerGradients = [
  "from-[#2b1e63] to-[#915EFF]",
  "from-[#0f3d3e] to-[#00cea8]",
  "from-[#3a1b4d] to-[#bf61ff]",
  "from-[#1c2b52] to-[#2f80ed]",
  "from-[#4d1b2d] to-[#ec008c]",
];

const bannerIcons = [
  // dashboard / monitor
  <svg key="i0" viewBox="0 0 48 48" className="h-14 w-14" fill="none">
    <rect x="5" y="8" width="38" height="26" rx="3" stroke="white" strokeWidth="2" />
    <path d="M10 28l7-8 6 5 9-11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 40h12M24 34v6" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // navigation / map pin
  <svg key="i1" viewBox="0 0 48 48" className="h-14 w-14" fill="none">
    <path d="M24 44s14-13 14-23a14 14 0 0 0-28 0c0 10 14 23 14 23z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="24" cy="21" r="5" stroke="white" strokeWidth="2" />
  </svg>,
  // code brackets
  <svg key="i2" viewBox="0 0 48 48" className="h-14 w-14" fill="none">
    <path d="M17 12L6 24l11 12M31 12l11 12-11 12M27 10l-6 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // function / graph curve
  <svg key="i3" viewBox="0 0 48 48" className="h-14 w-14" fill="none">
    <path d="M6 34c6 0 8-22 14-22s8 22 14 22 8-10 8-10" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 40h36" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // trending forecast
  <svg key="i4" viewBox="0 0 48 48" className="h-14 w-14" fill="none">
    <path d="M6 32l10-10 8 6 16-18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 10h8v8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 40h36" stroke="white" strokeWidth="1.5" strokeDasharray="2 3" />
  </svg>,
];

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3 w-3 flex-shrink-0 fill-current">
    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
  </svg>
);

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  role,
  tags,
  sourceCodeLink,
  liveDemoLink,
  note,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)} className="h-full">
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareColor="#915EFF"
        glareMaxOpacity={0.1}
        perspective={1000}
        className="h-full"
      >
        <div
          className="bg-tertiary flex h-full w-full flex-col rounded-2xl p-5 transition-all duration-300 hover:shadow-glow sm:min-h-[500px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className={`relative flex h-[150px] w-full flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${bannerGradients[index % bannerGradients.length]}`}
            style={{ transform: "translateZ(20px)" }}
          >
            {bannerIcons[index % bannerIcons.length]}
            <a
              href={sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${name} on GitHub`}
              className="black-gradient absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
            >
              <img src={github} alt="" className="h-1/2 w-1/2 object-contain" />
            </a>
          </div>

          {/* Fixed-height title area so all cards align regardless of name length */}
          <div className="mt-5 flex-shrink-0" style={{ transform: "translateZ(15px)" }}>
            <h3 className="line-clamp-2 min-h-[56px] text-[18px] font-bold leading-[1.3] text-white">
              {name}
            </h3>
            <p className="text-[#915EFF] mt-1 text-[13px] font-semibold">{role}</p>
          </div>

          {/* Flexible description area — fills remaining space so footers align */}
          <div className="mt-2 flex-1" style={{ transform: "translateZ(15px)" }}>
            <p className="text-secondary text-[14px] leading-[22px]">{description}</p>
            {note && (
              <p className="mt-2 text-[12px] italic text-secondary/80">{note}</p>
            )}
          </div>

          <div
            className="mt-4 flex flex-shrink-0 flex-wrap gap-2"
            style={{ transform: "translateZ(10px)" }}
          >
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[13px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>

          <div
            className="mt-5 flex flex-shrink-0 flex-wrap gap-3"
            style={{ transform: "translateZ(10px)" }}
          >
            <a
              href={sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-[#915EFF] px-5 py-2 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#915EFF]/10"
            >
              GitHub <ExternalIcon />
            </a>
            {liveDemoLink && (
              <a
                href={liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full bg-[#915EFF] px-5 py-2 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#7a4de0]"
              >
                Live Demo <ExternalIcon />
              </a>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
