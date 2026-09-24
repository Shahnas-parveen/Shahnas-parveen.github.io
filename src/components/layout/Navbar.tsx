import { useEffect, useState } from "react";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";

const RESUME_LINK =
  "https://drive.google.com/file/d/1aMo0m9cXqwBFrRe1Qaqw6Q-4uxBEp9_I/view?usp=sharing";
const GITHUB_LINK = "https://github.com/Shahnas-parveen";

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 flex-shrink-0 fill-current">
    <path d="M12 16l-6-6h4V3h4v7h4l-6 6zm-7 2h14v2H5v-2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 flex-shrink-0 fill-current">
    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white">
    <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white">
    <path d="M18.3 5.71L12 12.01l-6.3-6.3-1.41 1.41 6.3 6.3-6.3 6.29 1.41 1.41 6.3-6.29 6.3 6.29 1.41-1.41-6.3-6.29 6.3-6.3z" />
  </svg>
);

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  const closeMenu = () => setToggle(false);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 transition-all duration-300 ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a
          href="#"
          className="flex flex-shrink-0 items-center gap-3"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#915EFF] to-[#5f3bb0] text-[15px] font-black text-white">
            SP
          </span>
          <p className="flex cursor-pointer whitespace-nowrap text-[18px] font-bold text-white">
            Shahnas <span className="ml-1 text-[#915EFF]">Parveen</span>
          </p>
        </a>

        {/* Desktop nav — only shown once there's genuinely enough room */}
        <ul className="hidden list-none flex-row items-center gap-6 xl:flex 2xl:gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } cursor-pointer whitespace-nowrap text-[15px] font-medium transition-colors duration-300 hover:text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className="flex flex-shrink-0 items-center gap-3">
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border border-[#915EFF] px-4 py-2 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#915EFF]/10"
            >
              Resume <DownloadIcon />
            </a>
            <a
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full bg-[#915EFF] px-4 py-2 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#7a4de0] hover:shadow-lg hover:shadow-[#915EFF]/20"
            >
              GitHub <ExternalIcon />
            </a>
          </li>
        </ul>

        {/* Mobile / tablet nav */}
        <div className="flex flex-1 items-center justify-end xl:hidden">
          <button
            type="button"
            aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={toggle}
            aria-controls="mobile-nav-menu"
            onClick={() => setToggle(!toggle)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#915EFF]"
          >
            {toggle ? <CloseIcon /> : <MenuIcon />}
          </button>

          <div
            id="mobile-nav-menu"
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[200px] rounded-xl p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-[16px] font-medium ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={closeMenu}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className="mt-2 flex w-full flex-col gap-3 border-t border-white/10 pt-4">
                <a
                  href={RESUME_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex cursor-pointer items-center gap-1.5 text-[16px] font-medium text-white"
                >
                  Resume <DownloadIcon />
                </a>
                <a
                  href={GITHUB_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex cursor-pointer items-center gap-1.5 text-[16px] font-medium text-[#915EFF]"
                >
                  GitHub <ExternalIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
