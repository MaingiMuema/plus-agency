export default function AINewsTools() {
  return (
    <main className="min-h-screen pt-24 md:pt-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
          AI News & Tools
        </h1>

        {/* Latest AI News Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Latest AI News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* News Cards */}
            <div className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">GPT-4 Turbo Updates</h3>
              <p className="text-foreground/80 mb-4">
                Latest improvements in context handling and response accuracy in
                GPT-4 Turbo...
              </p>
              <a href="#" className="text-[var(--primary)] hover:underline">
                Read more →
              </a>
            </div>
            <div className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">
                AI in Healthcare Breakthroughs
              </h3>
              <p className="text-foreground/80 mb-4">
                New applications of AI in medical diagnosis and treatment
                planning...
              </p>
              <a href="#" className="text-[var(--primary)] hover:underline">
                Read more →
              </a>
            </div>
            <div className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">AI Ethics Guidelines</h3>
              <p className="text-foreground/80 mb-4">
                New framework for ethical AI development and deployment...
              </p>
              <a href="#" className="text-[var(--primary)] hover:underline">
                Read more →
              </a>
            </div>
          </div>
        </section>

        {/* AI Tools Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Featured AI Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tool Cards */}
            <div className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">AI Content Generator</h3>
              <p className="text-foreground/80 mb-4">
                Advanced tool for generating high-quality content across various
                formats...
              </p>
              <button className="btn-primary text-sm px-4 py-2">Try Now</button>
            </div>
            <div className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">Image Generation API</h3>
              <p className="text-foreground/80 mb-4">
                Create stunning images from text descriptions using our advanced
                AI...
              </p>
              <button className="btn-primary text-sm px-4 py-2">Try Now</button>
            </div>
            <div className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">AI Code Assistant</h3>
              <p className="text-foreground/80 mb-4">
                Intelligent coding assistant that helps developers write better
                code faster...
              </p>
              <button className="btn-primary text-sm px-4 py-2">Try Now</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
