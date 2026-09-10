import type { Metadata } from "next";
import { SectionLabel } from "../../components/ui";

export const metadata: Metadata = {
  title: "News | Dr. Joseph M. Chalil",
  description: "News and media coverage of Dr. Joseph M. Chalil.",
};

export default function NewsPage() {
  return (
    <section className="section shell">
      <div className="section-heading compact-heading">
        <div>
          <SectionLabel>07 · News</SectionLabel>
          <h2>
            News & <em>Media.</em>
          </h2>
        </div>

        <p>
          Latest news, interviews, articles and media coverage.
        </p>
      </div>

      <div>
        <p>News articles will appear here.</p>
      </div>
    </section>
  );
}