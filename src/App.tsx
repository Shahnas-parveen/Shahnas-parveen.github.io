import { useEffect } from "react";

import {
  About,
  Achievements,
  Certifications,
  Contact,
  Education,
  Experience,
  Footer,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <div className="bg-primary relative z-0">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
      <About />
      <div className="relative">
        <div className="css-particles" />
        <Education />
      </div>
      <Experience />
      <Tech />
      <div className="relative">
        <div className="css-particles css-particles-purple" />
        <Works />
      </div>
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
