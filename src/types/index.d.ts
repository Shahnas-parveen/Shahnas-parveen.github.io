export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
};

export type TExperience = {
  title: string;
  shortLabel: string;
  companyName: string;
  project: string;
  duration: string;
  description: string;
};

export type TProject = {
  description: string;
  role: string;
  tags: {
    name: string;
    color: string;
  }[];
  sourceCodeLink: string;
  liveDemoLink?: string;
  note?: string;
} & Required<Pick<TCommonProps, "name">>;

export type TSkillCategory = {
  category: string;
  items: string[];
};

export type TNavLink = {
  id: string;
} & Required<Pick<TCommonProps, "title">>;

export type TInterest = Required<Pick<TCommonProps, "title">>;

export type TCertification = {
  name: string;
  organization: string;
  duration: string;
  date: string;
  certificateLink: string;
};

export type TSemester = {
  label: string;
  score: string;
};

export type TEducationEntry = {
  degree: string;
  institution: string;
  duration: string;
  score: string;
  semesters?: TSemester[];
};

export type TAchievement = {
  title: string;
  description: string;
};

export type TStat = {
  value: string;
  label: string;
};

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};
