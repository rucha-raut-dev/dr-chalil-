import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { SectionLabel } from "../../components/ui";
import { education } from "../../lib/data";

export const metadata: Metadata = {
  title: "Education | Dr. Joseph M. Chalil",
  description: "Credentials built for complex healthcare systems.",
};

export default function EducationPage() {
  return (
    <section id="education" className="section shell">
      <div className="section-heading compact-heading">
        <div><SectionLabel>03 · Education</SectionLabel><h2>Credentials built for <em>complex systems.</em></h2></div>
      </div>
      <div className="education-list">
        {education.map(([year, degree, school]) => (
          <article className="education-row" key={school}>
            <span className="education-year">{year}</span>
            <GraduationCap size={18} />
            <div><h3>{degree}</h3><p>{school}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}