import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { interests } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const icons: Record<string, React.ReactNode> = {
  "Data Science": (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
      <circle cx="24" cy="24" r="6" stroke="#915EFF" strokeWidth="2" />
      <path
        d="M24 6v6M24 36v6M6 24h6M36 24h6M11.5 11.5l4.2 4.2M32.3 32.3l4.2 4.2M11.5 36.5l4.2-4.2M32.3 15.7l4.2-4.2"
        stroke="#915EFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  "Data Analytics": (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
      <path
        d="M8 40V22M18 40V10M28 40V26M38 40V16"
        stroke="#915EFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M6 18l10-8 10 8 10-14"
        stroke="#00cea8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "Web Development": (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
      <rect x="5" y="9" width="38" height="28" rx="3" stroke="#915EFF" strokeWidth="2" />
      <path d="M5 16h38" stroke="#915EFF" strokeWidth="2" />
      <circle cx="10" cy="12.5" r="1.2" fill="#915EFF" />
      <circle cx="14" cy="12.5" r="1.2" fill="#915EFF" />
      <path
        d="M18 26l-4 4 4 4M30 26l4 4-4 4M26 24l-4 12"
        stroke="#00cea8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "Core Programming / DSA": (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
      <circle cx="12" cy="12" r="4" stroke="#915EFF" strokeWidth="2" />
      <circle cx="36" cy="12" r="4" stroke="#915EFF" strokeWidth="2" />
      <circle cx="24" cy="30" r="4" stroke="#915EFF" strokeWidth="2" />
      <circle cx="12" cy="40" r="3" stroke="#00cea8" strokeWidth="2" />
      <circle cx="36" cy="40" r="3" stroke="#00cea8" strokeWidth="2" />
      <path
        d="M14.5 15l7 12M33.5 15l-7 12M21 33l-6 4M27 33l6 4"
        stroke="#915EFF"
        strokeWidth="1.6"
      />
    </svg>
  ),
  "Cloud / DevOps": (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
      <path
        d="M15 33a8 8 0 0 1-1-15.9A10 10 0 0 1 33 15a7 7 0 0 1 2 13.8"
        stroke="#915EFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M24 33v9M20 37l4 5 4-5"
        stroke="#00cea8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

interface IInterestCard {
  index: number;
  title: string;
}

const InterestCard: React.FC<IInterestCard> = ({ index, title }) => (
  <Tilt glareEnable tiltEnable tiltMaxAngleX={20} tiltMaxAngleY={20} glareColor="#915EFF" glareMaxOpacity={0.15} perspective={800}>
    <div className="w-full max-w-[230px] xs:w-[230px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.4, 0.75)}
        className="gradient-border shadow-card w-full rounded-[20px]"
      >
        <div
          className="bg-tertiary flex min-h-[220px] flex-col items-center justify-evenly rounded-[20px] px-8 py-6"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div style={{ transform: "translateZ(30px)" }}>{icons[title]}</div>
          <h3
            className="text-center text-[17px] font-bold text-white"
            style={{ transform: "translateZ(20px)" }}
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-8 max-sm:justify-center">
        {interests.map((interest, index) => (
          <InterestCard key={interest.title} index={index} title={interest.title!} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
