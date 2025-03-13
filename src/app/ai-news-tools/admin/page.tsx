"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { addNews, addTool } from "@/app/actions/aiData";
import Link from "next/link";

export default function AdminPage() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  async function handleNewsSubmit(formData: FormData) {
    const result = await addNews(formData);
    if (result.success) {
      setMessage("News added successfully!");
      // Redirect to the new news item page
      router.push(`/ai-news-tools/news/${result.slug}`);
      router.refresh();
    } else {
      setMessage("Failed to add news. Please try again.");
    }
  }

  async function handleToolSubmit(formData: FormData) {
    const result = await addTool(formData);
    if (result.success) {
      setMessage("Tool added successfully!");
      // Redirect to the new tool page
      router.push(`/ai-news-tools/tools/${result.slug}`);
      router.refresh();
    } else {
      setMessage("Failed to add tool. Please try again.");
    }
  }

  return (
    <main className="min-h-screen pt-24 md:pt-32">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">
            Content Dashboard
          </h1>
          <Link
            href="/ai-news-tools"
            className="text-[var(--primary)] hover:underline"
          >
            ← Back to AI News & Tools
          </Link>
        </div>

        {message && (
          <div className="mb-8 p-4 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20">
            {message}
          </div>
        )}

        {/* Add News Form */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Add New AI News
          </h2>
          <form
            id="newsForm"
            action={handleNewsSubmit}
            className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-lg p-6"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="newsTitle"
                  className="block text-sm font-medium mb-1"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="newsTitle"
                  name="title"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-[var(--glass-border)] focus:outline-none focus:border-[var(--primary)]"
                />
              </div>
              <div>
                <label
                  htmlFor="newsDesc"
                  className="block text-sm font-medium mb-1"
                >
                  Description
                </label>
                <textarea
                  id="newsDesc"
                  name="description"
                  required
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-[var(--glass-border)] focus:outline-none focus:border-[var(--primary)]"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="newsLink"
                  className="block text-sm font-medium mb-1"
                >
                  External Link (Optional)
                </label>
                <input
                  type="url"
                  id="newsLink"
                  name="link"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-[var(--glass-border)] focus:outline-none focus:border-[var(--primary)]"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Add News
              </button>
            </div>
          </form>
        </section>

        {/* Add Tool Form */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Add New AI Tool
          </h2>
          <form
            id="toolForm"
            action={handleToolSubmit}
            className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-lg p-6"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="toolTitle"
                  className="block text-sm font-medium mb-1"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="toolTitle"
                  name="title"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-[var(--glass-border)] focus:outline-none focus:border-[var(--primary)]"
                />
              </div>
              <div>
                <label
                  htmlFor="toolDesc"
                  className="block text-sm font-medium mb-1"
                >
                  Description
                </label>
                <textarea
                  id="toolDesc"
                  name="description"
                  required
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-[var(--glass-border)] focus:outline-none focus:border-[var(--primary)]"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="toolLink"
                  className="block text-sm font-medium mb-1"
                >
                  External Link (Optional)
                </label>
                <input
                  type="url"
                  id="toolLink"
                  name="link"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-[var(--glass-border)] focus:outline-none focus:border-[var(--primary)]"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Add Tool
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
