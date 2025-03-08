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

const solutions = [
  {
    title: "AI Development",
    description: "Building intelligent systems with machine learning",
    icon: "🤖",
    features: [
      "Neural Networks",
      "Machine Learning",
      "Natural Language Processing",
    ],
  },
  {
    title: "Blockchain Solutions",
    description: "Secure and decentralized applications",
    icon: "⛓️",
    features: ["Smart Contracts", "DeFi Platforms", "NFT Marketplaces"],
  },
  {
    title: "IoT Integration",
    description: "Connected device ecosystems",
    icon: "📱",
    features: ["Device Management", "Real-time Analytics", "Edge Computing"],
  },
  {
    title: "Cloud Architecture",
    description: "Scalable cloud infrastructure solutions",
    icon: "☁️",
    features: ["Microservices", "Serverless", "Container Orchestration"],
  },
  {
    title: "Cybersecurity",
    description: "Advanced security implementations",
    icon: "🔒",
    features: ["Threat Detection", "Zero Trust", "Encryption"],
  },
  {
    title: "Data Analytics",
    description: "Insights from complex datasets",
    icon: "📊",
    features: ["Data Processing", "Data Visualization", "Machine Learning"],
  },
  {
    title: "Mobile Development",
    description: "Building mobile apps for various platforms",
    icon: "📱",
    features: ["iOS", "Android", "Cross-platform"],
  },
  {
    title: "Web Development",
    description: "Modern web applications with cutting-edge tech",
    icon: "🌐",
    features: ["Single-page Apps", "Progressive Web Apps", "JAMstack"],
  },
  {
    title: "DevOps Automation",
    description: "Streamlined development operations",
    icon: "⚙️",
    features: ["CI/CD", "Infrastructure as Code", "Monitoring"],
  },
];

const industries = [
  {
    name: "Healthcare",
    solutions: [
      "Patient Management",
      "Telemedicine",
      "Medical IoT",
      "Health Analytics",
    ],
    icon: "🏥",
  },
  {
    name: "Finance",
    solutions: [
      "Digital Banking",
      "Payment Systems",
      "Risk Analysis",
      "Fraud Detection",
    ],
    icon: "💰",
  },
  {
    name: "E-commerce",
    solutions: [
      "Online Stores",
      "Inventory Management",
      "Analytics",
      "Recommendation Systems",
    ],
    icon: "🛍️",
  },
  {
    name: "Education",
    solutions: [
      "Learning Platforms",
      "Student Analytics",
      "Virtual Classrooms",
      "Adaptive Learning",
    ],
    icon: "📚",
  },
  {
    name: "Manufacturing",
    solutions: [
      "Process Automation",
      "Quality Control",
      "Supply Chain",
      "Predictive Maintenance",
    ],
    icon: "🏭",
  },
  {
    name: "Real Estate",
    solutions: [
      "Property Management",
      "Virtual Tours",
      "Market Analysis",
      "Smart Buildings",
    ],
    icon: "🏢",
  },
  {
    name: "Transportation",
    solutions: [
      "Fleet Management",
      "Route Optimization",
      "Logistics",
      "Real-time Tracking",
    ],
    icon: "🚚",
  },
  {
    name: "Agriculture",
    solutions: [
      "Smart Farming",
      "Crop Management",
      "Weather Analytics",
      "Supply Chain",
    ],
    icon: "🌾",
  },
  {
    name: "Energy",
    solutions: [
      "Grid Management",
      "Energy Analytics",
      "Smart Metering",
      "Renewable Integration",
    ],
    icon: "⚡",
  },
  {
    name: "Entertainment",
    solutions: [
      "Content Streaming",
      "User Analytics",
      "Digital Rights",
      "Recommendation Engine",
    ],
    icon: "🎬",
  },
  {
    name: "Insurance",
    solutions: [
      "Risk Assessment",
      "Claims Processing",
      "Fraud Detection",
      "Customer Analytics",
    ],
    icon: "🛡️",
  },
  {
    name: "Hospitality",
    solutions: [
      "Booking Systems",
      "Guest Experience",
      "Revenue Management",
      "Digital Concierge",
    ],
    icon: "🏨",
  },
];

const techStack = [
  {
    category: "Frontend",
    technologies: ["React", "Vue", "Angular", "Next.js", "TypeScript"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "Java", "Go", "Ruby"],
  },
  {
    category: "Database",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    category: "DevOps",
    technologies: ["Docker", "Kubernetes", "AWS", "Azure", "GCP"],
  },
];

export default function Home() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [activeStack, setActiveStack] = useState("Frontend");

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);

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
            <h1 className="text-7xl md:text-9xl py-4 font-bold mb-6 gradient-text">
              Plus Agency
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto shimmer-text">
              Pioneering digital transformation through innovative technology
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <a href="#contact" className="btn-primary">
                Start Your Journey
              </a>
              <a href="#solutions" className="btn-primary bg-accent-2">
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="section relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center gradient-text animate-on-scroll">
            Innovative Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="card animate-on-scroll hover-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-glow">
                  {solution.title}
                </h3>
                <p className="text-[var(--foreground)]/80 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {techStack.map((stack) => (
              <button
                key={stack.category}
                onClick={() => setActiveStack(stack.category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeStack === stack.category
                    ? "bg-[var(--primary)] text-white"
                    : "bg-[var(--glass-bg)] hover:bg-[var(--glass-border)]"
                }`}
              >
                {stack.category}
              </button>
            ))}
          </div>
          <div className="card">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {techStack
                .find((stack) => stack.category === activeStack)
                ?.technologies.map((tech, index) => (
                  <div
                    key={tech}
                    className="flex items-center justify-center p-4 rounded-lg bg-[var(--glass-bg)] hover-float"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="section relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
            Industry <span className="gradient-text">Solutions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="card hover-float animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-glow">
                  {industry.name}
                </h3>
                <ul className="space-y-2">
                  {industry.solutions.map((solution, sIndex) => (
                    <li
                      key={sIndex}
                      className="text-sm text-[var(--foreground)]/80"
                    >
                      • {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
            Development <span className="gradient-text">Process</span>
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-[var(--primary)] to-[var(--accent-2)]"></div>
            {[
              {
                phase: "Discovery",
                description: "Understanding your vision and requirements",
                icon: "🔍",
              },
              {
                phase: "Planning",
                description: "Strategic roadmap and architecture design",
                icon: "📋",
              },
              {
                phase: "Development",
                description: "Agile implementation with continuous feedback",
                icon: "💻",
              },
              {
                phase: "Testing",
                description: "Rigorous quality assurance and optimization",
                icon: "🔧",
              },
              {
                phase: "Deployment",
                description: "Seamless launch and monitoring",
                icon: "🚀",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-8 mb-12 animate-on-scroll ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <div className="card inline-block">
                    <div className="text-3xl mb-2">{step.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-glow">
                      {step.phase}
                    </h3>
                    <p className="text-sm text-[var(--foreground)]/80">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--primary)]"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
            Our <span className="gradient-text">Leadership</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mark Maingi",
                role: "CEO/CTO",
                description:
                  "Visionary leader driving technological innovation and strategic direction",
                icon: "👨‍💼",
              },
              {
                name: "Bramwel Mande",
                role: "Executive Marketing Officer",
                subRole: "Quality Assurance",
                description:
                  "Leading marketing strategies and ensuring product excellence",
                icon: "👨‍💻",
              },
              {
                name: "Samuel Ndolo",
                role: "Chief Operations Officer & CFO",
                description:
                  "Orchestrating seamless operations and financial strategy",
                icon: "👨‍💼",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="card hover-float animate-on-scroll text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-5xl mb-4">{member.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-glow">
                  {member.name}
                </h3>
                <div className="text-[var(--primary)] font-semibold mb-2">
                  {member.role}
                  {member.subRole && (
                    <div className="text-sm text-[var(--foreground)]/80">
                      {member.subRole}
                    </div>
                  )}
                </div>
                <p className="text-sm text-[var(--foreground)]/80">
                  {member.description}
                </p>
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
                  <select className="w-full p-4 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] focus:border-primary transition-all duration-300">
                    <option value="" className="text-black">
                      Select Solution
                    </option>
                    {solutions.map((solution, index) => (
                      <option
                        key={index}
                        className="text-black"
                        value={solution.title.toLowerCase()}
                      >
                        {solution.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <textarea
                    placeholder="Project Details"
                    rows={4}
                    className="w-full p-4 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] focus:border-primary transition-all duration-300"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full text-lg">
                  Initiate Project Discussion
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
