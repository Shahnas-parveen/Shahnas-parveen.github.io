import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { achievements, stats } from "../../constants";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const icons = ["🏆", "🎓", "🎤"];

const Achievements = () => {
  return (
    <div className="relative">
      <div className="css-particles css-particles-violet" />
      <div className="relative z-10">
        <Header useMotion={true} {...config.sections.achievements} />

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Tilt
              key={stat.label}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable
              glareColor="#915EFF"
              glareMaxOpacity={0.1}
              perspective={800}
            >
              <motion.div
                variants={fadeIn("up", "spring", index * 0.15, 0.75)}
                className="stat-card rounded-2xl p-6 text-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <h3
                  className="text-[32px] font-black text-white"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {stat.value}
                </h3>
                <p
                  className="text-secondary mt-1 text-[14px]"
                  style={{ transform: "translateZ(10px)" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {achievements.map((achievement, index) => (
            <Tilt
              key={achievement.title}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable
              glareColor="#915EFF"
              glareMaxOpacity={0.08}
              perspective={1000}
            >
              <motion.div
                variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                className="achievement-badge flex items-start gap-4 rounded-2xl p-6"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="text-[32px]" style={{ transform: "translateZ(25px)" }}>
                  {icons[index % icons.length]}
                </span>
                <div className="flex-1" style={{ transform: "translateZ(15px)" }}>
                  <h4 className="text-[18px] font-bold text-white">{achievement.title}</h4>
                  <p className="text-secondary mt-1 text-[14px] leading-[22px]">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");
