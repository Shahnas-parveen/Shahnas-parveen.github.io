import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { certifications } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const Certifications = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.certifications} />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <Tilt
            key={cert.name}
            glareEnable
            tiltEnable
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareColor="#915EFF"
            glareMaxOpacity={0.08}
            perspective={1000}
          >
            <motion.div
              variants={fadeIn("up", "spring", index * 0.12, 0.75)}
              className="achievement-badge flex h-full flex-col justify-between rounded-2xl p-6"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div style={{ transform: "translateZ(15px)" }}>
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
                  <path
                    d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
                    stroke="#915EFF"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8.5 13.5L7 21l5-2.5 5 2.5-1.5-7.5"
                    stroke="#915EFF"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="mt-3 text-[17px] font-bold text-white">{cert.name}</h3>
                <p className="text-secondary mt-1 text-[14px]">{cert.organization}</p>
                <p className="text-secondary mt-1 text-[12px]">
                  {cert.duration} · {cert.date}
                </p>
              </div>
              <a
                href={cert.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#915EFF] px-5 py-2 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#915EFF]/10"
                style={{ transform: "translateZ(10px)" }}
              >
                View Certificate ↗
              </a>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
