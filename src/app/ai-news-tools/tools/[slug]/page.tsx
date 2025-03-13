import { getTools } from "@/app/actions/aiData";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ToolItem {
  id: string;
  title: string;
  description: string;
  link: string;
  status: string;
  slug: string;
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function ToolPage({ params }: Props) {
  const tools = (await getTools()) as ToolItem[];
  const tool = tools.find((item) => item.slug === params.slug);

  if (!tool) {
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
              {tool.title}
            </h1>
            <div className="text-sm text-foreground/60 mb-6">
              Status:{" "}
              <span className="text-[var(--primary)]">{tool.status}</span>
            </div>
            <p className="text-lg mb-8">{tool.description}</p>
            {tool.link && (
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Try This Tool
              </a>
            )}
          </article>
        </div>
      </div>
    </main>
  );
}
