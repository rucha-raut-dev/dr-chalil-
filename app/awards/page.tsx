import type { Metadata } from "next";
import { Award } from "lucide-react";
import { SectionLabel } from "../../components/ui";
import { awards } from "../../lib/data";

export const metadata: Metadata = {
  title: "Awards | Dr. Joseph M. Chalil",
  description: "Recognition for leadership and service.",
};

export default function AwardsPage() {
  return (
    <section id="awards" className="section awards-section">
      <div className="shell">
        <div className="section-heading compact-heading">
          <div><SectionLabel>06 · Recognition</SectionLabel><h2>Recognition for <em>leadership and service.</em></h2></div>
        </div>
        <div className="awards-list">
          {awards.map(([year, title, org]) => <article className="award-row" key={`${year}-${title}`}><span>{year}</span><Award size={17} /><div><h3>{title}</h3><p>{org}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}