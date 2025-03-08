"use client";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

const colors = ["#cc32a9", "#fad509", "#f46e31", "#0290d0"];

export default function Home() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Create particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);

    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-grid">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            opacity: 0.3,
            borderRadius: "50%",
          }}
        />
      ))}

      {/* Hero Section */}
      <section className="section min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent-1/10 animate-gradient"></div>
        <div className="container mx-auto text-center z-10 px-4">
          <div className="animate-on-scroll">
            <h1 className="text-7xl md:text-9xl font-bold mb-6 gradient-text">
              Plus Agency
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto shimmer-text">
              Crafting digital excellence through innovative technology
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <a href="#contact" className="btn-primary">
                Start Your Journey
              </a>
              <a href="#services" className="btn-primary bg-accent-2">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center gradient-text animate-on-scroll">
            Future-Ready Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Development",
                description:
                  "Leveraging artificial intelligence to create smarter, more efficient solutions",
                icon: "🤖",
              },
              {
                title: "Immersive Experiences",
                description:
                  "Creating captivating digital environments that engage and inspire",
                icon: "🌟",
              },
              {
                title: "Blockchain Innovation",
                description:
                  "Building secure, decentralized applications for the future",
                icon: "⛓️",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="card animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-glow">
                  {service.title}
                </h3>
                <p className="text-[var(--foreground)]/80">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="section relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
            Featured <span className="gradient-text">Innovations</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Neural Network UI",
                description:
                  "AI-driven user interface that adapts to user behavior",
                tags: ["AI", "UI/UX", "React"],
              },
              {
                title: "Quantum Analytics",
                description: "Next-gen data processing platform",
                tags: ["Big Data", "Analytics", "Cloud"],
              },
              {
                title: "Cyber Security Hub",
                description: "Advanced threat detection system",
                tags: ["Security", "AI", "Blockchain"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="card animate-on-scroll hover-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video relative mb-4 overflow-hidden rounded-lg bg-gradient-to-r from-primary to-accent-2">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl">{project.title[0]}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-glow">
                  {project.title}
                </h3>
                <p className="mb-4 text-[var(--foreground)]/80">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-sm bg-[var(--glass-bg)] border border-[var(--glass-border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
            Initialize <span className="gradient-text">Contact</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="card">
              <form className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <textarea
                    placeholder="Your Vision"
                    rows={4}
                    className="w-full p-4 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] focus:border-primary transition-all duration-300"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full text-lg">
                  Initiate Connection
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
