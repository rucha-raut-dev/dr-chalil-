import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { news } from "../../../lib/data";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return news.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const article = news.find((item) => item.slug === params.slug);

  if (!article) {
    return {
      title: "Article Not Found | Dr. Joseph M. Chalil",
    };
  }

  return {
    title: `${article.title} | Dr. Joseph M. Chalil`,
    description: article.description,
  };
}

export default function NewsArticlePage({ params }: PageProps) {
  const articleIndex = news.findIndex((item) => item.slug === params.slug);
  const article = news[articleIndex];

  if (!article) {
    return (
      <section className="section shell news-article">
        <Link href="/news" className="news-back">
          <ArrowLeft size={15} />
          Back to News
        </Link>

        <div className="news-not-found">
          <span className="eyebrow">07 · NEWS</span>
          <h1>Article not found.</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="section news-article">
      <div className="shell">

        <Link href="/news" className="news-back">
          <ArrowLeft size={15} />
          Back to News
        </Link>

        <header className="news-article-header">
          <span className="eyebrow">07 · NEWS</span>

          <h1>{article.title}</h1>

          <div className="news-article-meta">
            {article.meta}
          </div>

          <p className="news-article-intro">
            {article.description}
          </p>
        </header>

        <div className="news-article-divider" />

        <div className="news-article-layout">

          <aside className="news-article-aside">
            <span>ARTICLE</span>
            <strong>{String(articleIndex + 1).padStart(2, "0")}</strong>
          </aside>

          <article className="news-article-body">

            {article.image ? (
              <div className="news-article-image">
                <img
                  src={article.image}
                  alt={article.title}
                />
              </div>
            ) : (
              <div className="news-article-image news-article-image-placeholder">
                <span className="news-placeholder-mark">“</span>
                <span className="news-placeholder-source">
                  {article.source}
                </span>
              </div>
            )}

            <div className="news-article-copy">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="news-source">
              <span>Source</span>
              <strong>{article.source}</strong>
            </div>

            <div className="news-article-footer">

              <Link href="/news" className="news-back">
                <ArrowLeft size={15} />
                Back to all news
              </Link>

              <Link href="/contact" className="news-contact-link">
                Contact
                <ArrowUpRight size={15} />
              </Link>

            </div>

          </article>
        </div>
      </div>
    </section>
  );
}