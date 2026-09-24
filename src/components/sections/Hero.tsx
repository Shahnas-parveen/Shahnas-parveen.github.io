import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { config } from "../../constants/config";

const RESUME_LINK =
  "https://drive.google.com/file/d/1aMo0m9cXqwBFrRe1Qaqw6Q-4uxBEp9_I/view?usp=sharing";

const AcademicSnapshot = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    className="glass-card hidden w-[260px] flex-shrink-0 rounded-2xl p-6 lg:block"
  >
    <p className="text-secondary text-[12px] uppercase tracking-wider">
      Academic Snapshot
    </p>
    <p className="mt-3 text-[36px] font-black leading-none text-white">9.18</p>
    <p className="text-secondary mt-1 text-[13px]">Overall CGPA</p>

    <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
      <p className="text-[13px] text-white-100">
        <span className="font-bold text-white">5</span> Projects ·{" "}
        <span className="font-bold text-white">2</span> Internships
      </p>
      <p className="text-[13px] text-white-100">
        <span className="font-bold text-white">6</span> Certifications
      </p>
    </div>
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative mx-auto w-full overflow-hidden">
      <div className="css-particles" />
      <div
        className={`relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 pb-16 pt-[140px] ${styles.paddingX} lg:min-h-screen lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:pb-0 lg:pt-0`}
      >
        <div className="flex flex-row gap-5">
          <div className="mt-5 hidden flex-shrink-0 flex-col items-center justify-center sm:flex">
            <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
            <div className="violet-gradient h-40 w-1 sm:h-72" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-w-0"
          >
            <p className="text-secondary text-[14px] uppercase tracking-wider sm:text-[16px]">
              Hi, I'm
            </p>
            <h1
              className={`font-black text-white leading-[1.1] text-[34px] xs:text-[42px] sm:text-[52px] md:text-[58px] lg:text-[42px] lg:leading-[1.1] xl:whitespace-nowrap xl:text-[56px] 2xl:text-[62px]`}
            >
              <span className="text-[#915EFF]">{config.hero.name}</span>
            </h1>
            <p className="text-white-100 mt-3 text-[18px] font-medium sm:text-[22px]">
              {config.hero.tagline[0]}
            </p>
            <p className="text-secondary mt-1 text-[16px] sm:text-[18px]">
              {config.hero.tagline[1]}
            </p>
            <p className="mt-4 text-[14px] font-medium text-[#c9c2ff] sm:text-[16px]">
              {config.hero.skillsLine}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="hero-cta-btn rounded-full bg-[#915EFF] px-8 py-3 text-[16px] font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#7a4de0] hover:shadow-[#915EFF]/25"
              >
                View My Work
              </a>
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border-2 border-[#915EFF] px-8 py-3 text-[16px] font-bold text-white transition-all duration-300 hover:bg-[#915EFF]/10"
              >
                <svg className="h-4 w-4 flex-shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-5">
              <a
                href="https://github.com/Shahnas-parveen"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#915EFF]/30 transition-all duration-300 hover:border-[#915EFF] hover:bg-[#915EFF]/10"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/shahnas-parveen"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#915EFF]/30 transition-all duration-300 hover:border-[#915EFF] hover:bg-[#915EFF]/10"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:sshhhhh556@gmail.com"
                className="social-icon-link flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#915EFF]/30 transition-all duration-300 hover:border-[#915EFF] hover:bg-[#915EFF]/10"
                aria-label="Email"
              >
                <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        <AcademicSnapshot />
      </div>
    </section>
  );
};

export default Hero;
