import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const contactItems = [
  {
    label: "Email",
    value: "sshhhhh556@gmail.com",
    href: "mailto:sshhhhh556@gmail.com",
    external: false,
    icon: (
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    ),
  },
  {
    label: "Location",
    value: "Puducherry, India",
    href: undefined,
    external: false,
    icon: (
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shahnas-parveen",
    href: "https://www.linkedin.com/in/shahnas-parveen",
    external: true,
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Shahnas-parveen",
    href: "https://github.com/Shahnas-parveen",
    external: true,
    icon: (
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    ),
  },
  {
    label: "Resume",
    value: "View / Download PDF",
    href: "https://drive.google.com/file/d/1aMo0m9cXqwBFrRe1Qaqw6Q-4uxBEp9_I/view?usp=sharing",
    external: true,
    icon: (
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
    ),
  },
];

const Contact = () => {
  return (
    <motion.div variants={fadeIn("up", "tween", 0.1, 1)}>
      <Header useMotion={false} {...config.contact} />

      <p className="text-secondary mt-4 max-w-2xl text-[16px] leading-[26px]">
        I'm open to internship and placement opportunities in data, AI, and
        software roles. Feel free to reach out through any of the channels
        below.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 [&>*:last-child:nth-child(odd)]:sm:col-span-2">
        {contactItems.map((item, index) => {
          const inner = (
            <>
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#915EFF]/15">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#915EFF]">
                  {item.icon}
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-secondary text-[12px] uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="truncate text-[15px] font-semibold text-white">
                  {item.value}
                </p>
              </div>
            </>
          );

          return (
            <motion.div key={item.label} variants={fadeIn("up", "spring", index * 0.1, 0.6)}>
              {item.href ? (
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="glass-card flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#915EFF]/50"
                >
                  {inner}
                </a>
              ) : (
                <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
                  {inner}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");
