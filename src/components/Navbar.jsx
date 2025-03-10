"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["projects", "solutions"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-2 md:py-4 bg-[var(--background)] md:bg-[var(--glass-bg)] backdrop-blur-xl border-b border-[var(--glass-border)] shadow-md"
          : "py-4 md:py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between min-h-[48px] md:min-h-0">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold relative group flex"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image src="/logo_favicon.png" alt="Plus" width={50} height={50} />
            <span className="gradient-text mt-5 text-4xl">Plus</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-2)] transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["solutions", "projects"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative group py-2 hover-float ${
                  activeSection === section
                    ? "text-[var(--primary)]"
                    : "text-foreground/90"
                }`}
              >
                <span className="relative z-10 capitalize">{section}</span>
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-2)] transition-all duration-300 group-hover:w-full ${
                    activeSection === section ? "w-full" : ""
                  }`}
                ></span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary text-sm px-6"
            >
              Initialize Project
            </button>
          </div>

          {/* Mobile Menu Button - Enhanced visibility */}
          <button
            className={`md:hidden fixed top-4 right-4 z-50 w-14 h-14 flex items-center justify-center rounded-lg focus:outline-none transition-all duration-300 
              ${
                isMenuOpen
                  ? "bg-[var(--primary)] shadow-lg shadow-[var(--primary)]/20"
                  : isScrolled
                  ? "bg-[var(--primary)] shadow-lg shadow-[var(--primary)]/20"
                  : "bg-[var(--glass-bg)]/90 backdrop-blur-md border-2 border-[var(--primary)]/50 shadow-lg shadow-[var(--primary)]/10"
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative flex flex-col items-center justify-center w-7 h-7">
              <span
                className={`w-7 h-1 ${
                  isMenuOpen || isScrolled ? "bg-white" : "bg-foreground"
                } rounded-full transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`w-7 h-1 ${
                  isMenuOpen || isScrolled ? "bg-white" : "bg-foreground"
                } rounded-full transform transition-all duration-300 mt-1.5 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </div>
            <div
              className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-[var(--accent-2)] ${
                isMenuOpen ? "opacity-0" : "opacity-100 animate-pulse"
              } transition-opacity duration-300`}
            ></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black backdrop-blur-2xl transform transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } md:hidden`}
        >
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[var(--background)] to-transparent"></div>
          <div
            className={`flex flex-col items-center justify-center min-h-screen px-6 py-20 transform transition-all duration-500 ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="w-full max-w-md space-y-6">
              {["solutions", "projects"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`w-full py-5 px-6 text-xl font-bold rounded-lg transition-all duration-300
                    ${
                      activeSection === section
                        ? "gradient-text scale-102 bg-[var(--glass-bg)]/30"
                        : "text-foreground/90 hover:text-foreground active:scale-98"
                    }
                    hover:bg-[var(--glass-bg)]/20 active:bg-[var(--glass-bg)]/30`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full btn-primary text-lg py-5 px-6 mt-8 rounded-lg transition-all duration-300
                  hover:scale-102 active:scale-98"
              >
                Initialize Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
