import type { Metadata } from "next";
import Image from "next/image";
import { SectionLabel, ArrowLink } from "../../components/ui";
import { books } from "../../lib/data";

export const metadata: Metadata = {
  title: "Books | Dr. Joseph M. Chalil",
  description: "Ideas that move the healthcare conversation.",
};

export default function BooksPage() {
  return (
    <section id="books" className="section book-section">
      <div className="shell">
        <div className="section-heading compact-heading">
          <div><SectionLabel>04 · Books</SectionLabel><h2>Ideas that move the <em>healthcare conversation.</em></h2></div>
          <p>Two books exploring healthcare resilience, policy and the future of global care.</p>
        </div>
        <div className="books-grid">
          {books.map((book) => (
            <article className="book-card" key={book.title}>
              <div className="book-cover"><Image src={book.image} alt={`${book.title} book cover`} fill sizes="(max-width: 800px) 70vw, 22vw" className="book-img" /></div>
              <div className="book-info"><span>{book.meta}</span><h3>{book.title}</h3><p>{book.description}</p><ArrowLink href={book.href} external>Explore book</ArrowLink></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}