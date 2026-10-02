"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Gallery", href: "#gallery" },
];

const moreItems = [
  { label: "Education", href: "#education" },
  { label: "Languages", href: "#skills" },
  { label: "Download CV", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const { theme, setTheme } = useTheme();

  /* =====================================================
     SCROLL + ACTIVE SECTION
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "gallery",
      ];

      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 180) {
          current = section;
        }
      }

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     ESCAPE KEY
  ===================================================== */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setMoreOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =====================================================
     CLOSE MENUS
  ===================================================== */

  const closeMenus = () => {
    setMobileOpen(false);
    setMoreOpen(false);
  };

  /* =====================================================
     THEME
  ===================================================== */

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
   <header
  className="
    fixed
    left-1/2
    top-4
    z-50
    -translate-x-1/2
    w-fit
    max-w-[calc(100%-32px)]
  "
>
      {/* =================================================
          MAIN NAVBAR
      ================================================= */}

      <nav
        className={`
          relative
          flex
          min-h-[64px]
          w-full
          items-center
          rounded-[18px]
          border
          px-2.5
          py-2
          backdrop-blur-xl
          transition-all
          duration-300
          sm:px-3
          md:px-4

          ${
            scrolled
              ? `
                border-slate-200/80
                bg-white/95
                shadow-[0_12px_40px_rgba(15,35,50,0.12)]
                dark:border-white/10
                dark:bg-[#0b1a26]/95
              `
              : `
                border-slate-200/70
                bg-white/90
                shadow-[0_8px_30px_rgba(15,35,50,0.08)]
                dark:border-white/10
                dark:bg-[#0b1a26]/90
              `
          }
        `}
        aria-label="Main navigation"
      >
        {/* =================================================
            LOGO
        ================================================= */}

        <a
          href="#home"
          onClick={closeMenus}
          className="
            flex
            shrink-0
            items-center
            gap-2.5
            rounded-xl
            outline-none
            focus-visible:ring-2
            focus-visible:ring-[#c9a24a]/60
          "
          aria-label="Sabin Karmacharya home"
        >
          <span
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-[12px]
              bg-[#16384f]
              text-sm
              font-bold
              text-white
              shadow-sm
            "
          >
            S
          </span>

          <span
            className="
              hidden
              whitespace-nowrap
              text-[14px]
              font-bold
              tracking-[-0.01em]
              text-[#16384f]
              dark:text-white
              sm:block
            "
          >
            Sabin Karmacharya
          </span>
        </a>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <div
          className="
            mx-3
            hidden
            h-7
            w-px
            bg-slate-200
            dark:bg-white/10
            lg:block
          "
        />

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div className="hidden min-w-0 items-center md:flex">
          <div className="flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive =
                activeSection === item.href.substring(1);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMoreOpen(false)}
                  className={`
                    relative
                    whitespace-nowrap
                    rounded-lg
                    px-2.5
                    py-2
                    text-[13px]
                    font-semibold
                    outline-none
                    transition-colors
                    duration-200
                    focus-visible:ring-2
                    focus-visible:ring-[#c9a24a]/50

                    ${
                      isActive
                        ? "text-[#16384f] dark:text-white"
                        : `
                          text-slate-500
                          hover:text-[#16384f]
                          dark:text-slate-300
                          dark:hover:text-white
                        `
                    }
                  `}
                >
                  {item.label}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="
                        absolute
                        bottom-0
                        left-2.5
                        right-2.5
                        h-[2px]
                        rounded-full
                        bg-[#c9a24a]
                      "
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}
                </a>
              );
            })}

            {/* =================================================
                MORE
            ================================================= */}

            <div className="relative ml-0.5">
              <button
                type="button"
                onClick={() => setMoreOpen((value) => !value)}
                className="
                  flex
                  min-h-[38px]
                  items-center
                  gap-1
                  rounded-lg
                  px-2.5
                  py-2
                  text-[13px]
                  font-semibold
                  text-slate-500
                  outline-none
                  transition
                  hover:text-[#16384f]
                  focus-visible:ring-2
                  focus-visible:ring-[#c9a24a]/50
                  dark:text-slate-300
                  dark:hover:text-white
                "
                aria-expanded={moreOpen}
                aria-haspopup="menu"
              >
                More

                <ChevronDown
                  size={14}
                  strokeWidth={2}
                  className={`
                    transition-transform
                    duration-200
                    ${moreOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                      scale: 0.97,
                    }}
                    transition={{ duration: 0.15 }}
                    className="
                      absolute
                      right-0
                      top-[44px]
                      w-44
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200/80
                      bg-white
                      p-1.5
                      shadow-[0_15px_40px_rgba(15,35,50,0.14)]
                      dark:border-white/10
                      dark:bg-[#102536]
                    "
                    role="menu"
                  >
                    {moreItems.map((item) => (
                      <a
                        key={`${item.href}-${item.label}`}
                        href={item.href}
                        onClick={closeMenus}
                        className="
                          flex
                          min-h-[40px]
                          items-center
                          rounded-xl
                          px-3
                          text-[13px]
                          font-semibold
                          text-slate-600
                          transition
                          hover:bg-slate-50
                          hover:text-[#16384f]
                          dark:text-slate-200
                          dark:hover:bg-white/5
                          dark:hover:text-white
                        "
                        role="menuitem"
                      >
                        {item.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =================================================
            RIGHT SIDE ACTIONS
        ================================================= */}

        <div className="ml-3 flex shrink-0 items-center gap-1.5">
          {/* Facebook */}

          <a
            href="https://www.facebook.com/sabin.karmacharya.128504"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Sabin Karmacharya on Facebook"
            className="
              hidden
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              text-[#16384f]
              outline-none
              transition
              hover:-translate-y-0.5
              hover:border-[#16384f]
              hover:bg-[#16384f]
              hover:text-white
              focus-visible:ring-2
              focus-visible:ring-[#c9a24a]/50
              lg:flex
              dark:border-white/10
              dark:text-white
              dark:hover:bg-white
              dark:hover:text-[#16384f]
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[15px] w-[15px]"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.67.33-1 1-1Z" />
            </svg>
          </a>

          {/* Theme */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              text-[#16384f]
              outline-none
              transition
              hover:-translate-y-0.5
              hover:border-[#16384f]
              focus-visible:ring-2
              focus-visible:ring-[#c9a24a]/50
              dark:border-white/10
              dark:text-white
            "
          >
            {theme === "dark" ? (
              <Sun size={16} strokeWidth={1.8} />
            ) : (
              <Moon size={16} strokeWidth={1.8} />
            )}
          </button>

          {/* Hire Me */}

          <a
            href="#contact"
            onClick={closeMenus}
            className="
              hidden
              min-h-[40px]
              items-center
              gap-1.5
              rounded-xl
              bg-[#16384f]
              px-3.5
              text-[13px]
              font-bold
              text-white
              shadow-[0_4px_14px_rgba(22,56,79,0.20)]
              outline-none
              transition
              hover:-translate-y-0.5
              hover:bg-[#1c4965]
              focus-visible:ring-2
              focus-visible:ring-[#c9a24a]/60
              sm:flex
            "
          >
            Hire Me

            <ChevronRight
              size={14}
              strokeWidth={2.2}
            />
          </a>

          {/* Mobile Menu */}

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              text-[#16384f]
              outline-none
              transition
              hover:border-[#16384f]
              focus-visible:ring-2
              focus-visible:ring-[#c9a24a]/50
              md:hidden
              dark:border-white/10
              dark:text-white
            "
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </button>
        </div>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -8,
              scale: 0.98,
            }}
            transition={{ duration: 0.18 }}
            className="
              mt-2
              overflow-hidden
              rounded-[18px]
              border
              border-slate-200/80
              bg-white/95
              p-2
              shadow-[0_15px_40px_rgba(15,35,50,0.12)]
              backdrop-blur-xl
              md:hidden
              dark:border-white/10
              dark:bg-[#0b1a26]/95
            "
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenus}
                className={`
                  flex
                  min-h-[44px]
                  items-center
                  rounded-xl
                  px-4
                  text-sm
                  font-semibold
                  transition

                  ${
                    activeSection === item.href.substring(1)
                      ? `
                        bg-[#16384f]/5
                        text-[#16384f]
                        dark:bg-white/5
                        dark:text-white
                      `
                      : `
                        text-slate-600
                        hover:bg-slate-50
                        hover:text-[#16384f]
                        dark:text-slate-200
                        dark:hover:bg-white/5
                        dark:hover:text-white
                      `
                  }
                `}
              >
                {item.label}
              </a>
            ))}

            <div className="my-1.5 h-px bg-slate-100 dark:bg-white/10" />

            {moreItems.map((item) => (
              <a
                key={`${item.href}-${item.label}`}
                href={item.href}
                onClick={closeMenus}
                className="
                  flex
                  min-h-[44px]
                  items-center
                  rounded-xl
                  px-4
                  text-sm
                  font-semibold
                  text-slate-600
                  transition
                  hover:bg-slate-50
                  hover:text-[#16384f]
                  dark:text-slate-200
                  dark:hover:bg-white/5
                  dark:hover:text-white
                "
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenus}
              className="
                mt-1.5
                flex
                min-h-[44px]
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#16384f]
                text-sm
                font-bold
                text-white
                transition
                hover:bg-[#1c4965]
              "
            >
              Hire Me

              <ChevronRight size={16} />
            </a>

            <a
              href="https://www.facebook.com/sabin.karmacharya.128504"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-1
                flex
                min-h-[42px]
                items-center
                justify-center
                gap-2
                rounded-xl
                text-sm
                font-semibold
                text-[#16384f]
                transition
                hover:bg-slate-50
                dark:text-white
                dark:hover:bg-white/5
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.67.33-1 1-1Z" />
              </svg>

              Facebook
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}