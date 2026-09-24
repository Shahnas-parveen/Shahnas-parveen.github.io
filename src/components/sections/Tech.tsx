import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { skillCategories } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../constants/styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((group, index) => (
          <motion.div
            key={group.category}
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="text-[16px] font-bold uppercase tracking-wider text-[#915EFF]">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-tertiary px-4 py-1.5 text-[13px] font-medium text-white-100 transition-all duration-300 hover:border-[#915EFF]/60 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
