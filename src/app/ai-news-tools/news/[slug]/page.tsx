import { getNews } from "@/app/actions/aiData";
import Link from "next/link";
import { notFound } from "next/navigation";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  link: string;
  slug: string;
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function NewsPage({ params }: Props) {
  const news = (await getNews()) as NewsItem[];
  const newsItem = news.find((item) => item.slug === params.slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 md:pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/ai-news-tools"
            className="text-[var(--primary)] hover:underline mb-6 inline-block"
          >
            ← Back to AI News & Tools
          </Link>

          <article className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-lg p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {newsItem.title}
            </h1>
            <div className="text-sm text-foreground/60 mb-6">
              {newsItem.date}
            </div>
            <p className="text-lg mb-8">{newsItem.description}</p>
            {newsItem.link && (
              <a
                href={newsItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Read Full Article
              </a>
            )}
          </article>
        </div>
      </div>
    </main>
  );
}
