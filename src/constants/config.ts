type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    tagline: string[];
    skillsLine: string;
  };
  contact: TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    education: TSection;
    works: Required<TSection>;
    certifications: TSection;
    achievements: TSection;
  };
};

export const config: TConfig = {
  html: {
    title: "Shahnas Parveen H — Portfolio",
    fullName: "Shahnas Parveen H",
    email: "sshhhhh556@gmail.com",
  },
  hero: {
    name: "Shahnas Parveen H",
    tagline: ["Final Year B.Tech ISE Student", "Aspiring Data & AI Professional"],
    skillsLine: "Python · SQL · Machine Learning · Data Analytics",
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Final-year B.Tech Information Science and Engineering student with
      hands-on experience in Python, SQL, data analytics, machine learning, web
      development, and UI/UX design. Interested in building practical technology
      solutions with a focus on data-driven applications, intelligent systems,
      and user-friendly interfaces.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Experience.",
    },
    education: {
      p: "Academic background",
      h2: "Education.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `A selection of projects spanning data dashboards, machine learning,
      web development, and UI/UX design — each built to solve a practical,
      real-world problem.`,
    },
    certifications: {
      p: "Continuous learning",
      h2: "Certifications.",
    },
    achievements: {
      p: "What I have accomplished",
      h2: "Achievements.",
    },
  },
};
