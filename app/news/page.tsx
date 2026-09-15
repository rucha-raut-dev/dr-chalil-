import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../../components/ui";
import { news } from "../../lib/data";

export const metadata: Metadata = {
  title: "News | Dr. Joseph M. Chalil",
  description:
    "News, articles and media coverage featuring Dr. Joseph M. Chalil.",
};

export default function NewsPage() {
  return (
    <section className="section shell news-section">
      <div className="section-heading compact-heading">
        <div>
          <SectionLabel>07 · News</SectionLabel>

          <h2>
            News & <em>Media.</em>
          </h2>
        </div>

        <p>
          Articles, commentary, healthcare perspectives and media coverage
          featuring Dr. Joseph M. Chalil.
        </p>
      </div>

      <div className="news-list">
        {news.map((article, index) => (
          <article className="news-row" key={article.slug}>
            <span className="news-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="news-thumbnail">
              {article.image ? (
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                />
              ) : (
                <div className="news-thumbnail-placeholder">
                  <span>NEWS</span>
                </div>
              )}
            </div>

            <div className="news-info">
              <h3>{article.title}</h3>

              <p>{article.description}</p>

              <span className="news-row-meta">{article.meta}</span>
            </div>

            <Link
              href={`/news/${article.slug}`}
              className="news-link"
              aria-label={`Read ${article.title}`}
            >
              Read article
              <ArrowUpRight size={15} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}