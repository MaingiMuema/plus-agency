"use client";
import { useState, useEffect } from "react";

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
          ? "py-4 bg-[var(--glass-bg)] backdrop-blur-xl border-b border-[var(--glass-border)]"
          : "py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold relative group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="gradient-text">Plus</span>
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 w-12 h-12 flex items-center justify-center rounded-full focus:outline-none bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-sm shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative flex flex-col items-center justify-center w-6 h-6">
              <span
                className={`w-6 h-0.5 bg-foreground rounded-full transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-foreground rounded-full transform transition-all duration-300 mt-1.5 ${
                  isMenuOpen ? "-rotate-45 -translate-y-0.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-[var(--background)]/80 backdrop-blur-xl transform transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } md:hidden`}
        >
          <div
            className={`flex flex-col items-center justify-center h-full space-y-8 transform transition-all duration-500 ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {["solutions", "projects"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-2xl font-bold hover-float transition-all duration-300 ${
                  activeSection === section
                    ? "gradient-text scale-105"
                    : "text-foreground/90 hover:text-foreground"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary text-lg px-8 py-4 mt-4 transform hover:scale-105 transition-transform duration-300"
            >
              Initialize Project
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
