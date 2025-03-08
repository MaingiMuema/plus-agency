"use client";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[var(--glass-bg)] backdrop-blur-xl border-t border-[var(--glass-border)] py-16">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold gradient-text">Plus</h3>
            <p className="text-sm text-[var(--foreground)]/80 max-w-xs">
              Pioneering the future of digital innovation through cutting-edge
              technology and creative excellence.
            </p>
            <div className="pt-4">
              <div className="text-sm text-[var(--foreground)]/60">
                Crafting digital excellence since 2024
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-glow">
              Navigation Matrix
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] hover-float inline-block"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] hover-float inline-block"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] hover-float inline-block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-glow">Quantum Contact</h4>
            <ul className="space-y-3">
              <li className="group flex items-center space-x-2 hover-float">
                <span className="text-[var(--foreground)]/60 group-hover:text-[var(--primary)] transition-colors">
                  Email:
                </span>
                <a
                  href="mailto:hello@plusagency.com"
                  className="hover:text-[var(--secondary)] transition-colors"
                >
                  hello@plus.ke
                </a>
              </li>
              <li className="group flex items-center space-x-2 hover-float">
                <span className="text-[var(--foreground)]/60 group-hover:text-[var(--primary)] transition-colors">
                  Phone:
                </span>
                <a
                  href="tel:+254112246573"
                  className="hover:text-[var(--secondary)] transition-colors"
                >
                  +254 112246573
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-glow">Digital Nexus</h4>
            <div className="flex space-x-4">
              {[
                {
                  name: "Twitter",
                  href: "https://twitter.com",
                  color: "var(--primary)",
                  icon: (
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  ),
                },
                {
                  name: "LinkedIn",
                  href: "https://linkedin.com",
                  color: "var(--accent-2)",
                  icon: (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  ),
                },
                {
                  name: "GitHub",
                  href: "https://github.com",
                  color: "var(--accent-1)",
                  icon: (
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  ),
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-float group"
                  style={{
                    "--hover-color": social.color,
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--hover-color)] group-hover:border-transparent">
                    <span className="sr-only">{social.name}</span>
                    <svg
                      className="w-5 h-5 transition-all duration-300 group-hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      {social.icon}
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[var(--glass-border)] text-center">
          <div className="text-sm text-[var(--foreground)]/60">
            <p>
              &copy; {new Date().getFullYear()} Plus Agency. Pioneering
              Tomorrow&apos;s Digital Frontier.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
