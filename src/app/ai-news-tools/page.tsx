import { getNews, getTools } from "@/app/actions/aiData";
import Link from "next/link";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  link: string;
  slug: string;
}

interface ToolItem {
  id: string;
  title: string;
  description: string;
  link: string;
  status: string;
  slug: string;
}

export default async function AINewsTools() {
  const news = (await getNews()) as NewsItem[];
  const tools = (await getTools()) as ToolItem[];

  return (
    <main className="min-h-screen pt-24 md:pt-32">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">
            AI News & Tools
          </h1>
          <Link
            href="/ai-news-tools/admin"
            className="btn-primary text-sm px-4 py-2"
          >
            Manage Content
          </Link>
        </div>

        {/* Latest AI News Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Latest AI News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item: NewsItem) => (
              <div
                key={item.id}
                className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/80 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <Link
                    href={`/ai-news-tools/news/${item.slug}`}
                    className="text-[var(--primary)] hover:underline"
                  >
                    Read more →
                  </Link>
                  <span className="text-sm text-foreground/60">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Tools Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Featured AI Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool: ToolItem) => (
              <div
                key={tool.id}
                className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                <p className="text-foreground/80 mb-4">{tool.description}</p>
                <div className="flex gap-4">
                  <Link
                    href={`/ai-news-tools/tools/${tool.slug}`}
                    className="text-[var(--primary)] hover:underline"
                  >
                    Learn more
                  </Link>
                  {tool.link && (
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm px-4 py-2"
                    >
                      Try Now
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
