"use server";

import fs from "fs/promises";
import path from "path";

const newsPath = path.join(process.cwd(), "src/data/news.json");
const toolsPath = path.join(process.cwd(), "src/data/tools.json");

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

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function ensureUniqueSlug(slug: string, existingSlugs: string[]): string {
  let uniqueSlug = slug;
  let counter = 1;

  while (existingSlugs.includes(uniqueSlug)) {
    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }

  return uniqueSlug;
}

export async function addNews(formData: FormData) {
  try {
    const newsData = await fs.readFile(newsPath, "utf-8");
    const data = JSON.parse(newsData);

    const title = formData.get("title") as string;
    const baseSlug = generateSlug(title);
    const existingSlugs = data.news.map((item: NewsItem) => item.slug);
    const uniqueSlug = ensureUniqueSlug(baseSlug, existingSlugs);

    const newNews: NewsItem = {
      id: Date.now().toString(),
      title,
      description: formData.get("description") as string,
      date: new Date().toISOString().split("T")[0],
      link: formData.get("link") as string,
      slug: uniqueSlug,
    };

    data.news.unshift(newNews);
    await fs.writeFile(newsPath, JSON.stringify(data, null, 2));

    return { success: true, slug: uniqueSlug };
  } catch (error) {
    console.error("Error adding news:", error);
    return { success: false, error: "Failed to add news" };
  }
}

export async function addTool(formData: FormData) {
  try {
    const toolsData = await fs.readFile(toolsPath, "utf-8");
    const data = JSON.parse(toolsData);

    const title = formData.get("title") as string;
    const baseSlug = generateSlug(title);
    const existingSlugs = data.tools.map((item: ToolItem) => item.slug);
    const uniqueSlug = ensureUniqueSlug(baseSlug, existingSlugs);

    const newTool: ToolItem = {
      id: Date.now().toString(),
      title,
      description: formData.get("description") as string,
      link: formData.get("link") as string,
      status: "active",
      slug: uniqueSlug,
    };

    data.tools.unshift(newTool);
    await fs.writeFile(toolsPath, JSON.stringify(data, null, 2));

    return { success: true, slug: uniqueSlug };
  } catch (error) {
    console.error("Error adding tool:", error);
    return { success: false, error: "Failed to add tool" };
  }
}

export async function getNews() {
  try {
    const newsData = await fs.readFile(newsPath, "utf-8");
    const data = JSON.parse(newsData);
    return data.news;
  } catch (error) {
    console.error("Error reading news:", error);
    return [];
  }
}

export async function getTools() {
  try {
    const toolsData = await fs.readFile(toolsPath, "utf-8");
    const data = JSON.parse(toolsData);
    return data.tools;
  } catch (error) {
    console.error("Error reading tools:", error);
    return [];
  }
}
