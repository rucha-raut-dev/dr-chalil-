import type { Metadata } from "next";
import { SectionLabel } from "../../components/ui";
import { career } from "../../lib/data";

export const metadata: Metadata = {
  title: "Career | Dr. Joseph M. Chalil",
  description: "Leadership across healthcare and enterprise.",
};

export default function CareerPage() {
  return (
    <section id="career" className="section dark-section">
      <div className="shell">
        <div className="section-heading compact-heading">
          <div><SectionLabel>02 · Career</SectionLabel><h2>Leadership across <em>healthcare &amp; enterprise.</em></h2></div>
          <p>Current and previous roles across healthcare, life sciences, academia, media and strategic advisory work.</p>
        </div>
        <div className="timeline">
          {career.map(([date, role, org], index) => (
            <article className="timeline-item" key={`${role}-${index}`}>
              <div className="timeline-date">{date || "Earlier"}</div>
              <div><h3>{role}</h3><p>{org}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}