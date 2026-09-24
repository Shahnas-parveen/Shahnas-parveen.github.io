import { motion } from "framer-motion";

import { educationEntries } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const Education = () => {
  const [btech, ...rest] = educationEntries;

  return (
    <>
      <Header useMotion={true} {...config.sections.education} />

      <div className="mt-14 flex flex-col gap-8">
        {/* Primary degree card with semester breakdown */}
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          className="glass-card rounded-2xl p-8"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <h3 className="text-[22px] font-bold text-white sm:text-[24px]">
                {btech.degree}
              </h3>
              <p className="text-secondary mt-1 text-[15px]">{btech.institution}</p>
              <p className="text-secondary mt-1 text-[13px]">{btech.duration}</p>
            </div>
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-[#915EFF]/15 text-center">
              <span className="text-[16px] font-black text-[#915EFF]">9.18</span>
            </div>
          </div>

          {btech.semesters && (
            <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {btech.semesters.map((sem, i) => (
                <motion.div
                  key={sem.label}
                  variants={fadeIn("up", "spring", 0.15 + i * 0.06, 0.6)}
                  className="rounded-xl border border-white/10 bg-tertiary px-3 py-4 text-center"
                >
                  <p className="text-[20px] font-bold text-white">{sem.score}</p>
                  <p className="text-secondary mt-1 text-[11px] uppercase tracking-wider">
                    {sem.label.replace("Semester ", "Sem ")}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Earlier education */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {rest.map((entry, index) => (
            <motion.div
              key={entry.degree}
              variants={fadeIn("up", "spring", 0.2 + index * 0.15, 0.75)}
              className="glass-card flex items-center justify-between rounded-2xl p-6"
            >
              <div>
                <h4 className="text-[17px] font-bold text-white">{entry.degree}</h4>
                <p className="text-secondary mt-1 text-[14px]">{entry.institution}</p>
                <p className="text-secondary mt-1 text-[12px]">{entry.duration}</p>
              </div>
              <span className="text-[20px] font-black text-[#915EFF]">{entry.score}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
