import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { SectionLabel } from "../../components/ui";
import { publications, patents } from "../../lib/data";

export const metadata: Metadata = {
  title: "Research | Dr. Joseph M. Chalil",
  description: "Evidence, innovation and applied healthcare research.",
};

export default function ResearchPage() {
  return (
    <section id="research" className="section shell research-section">
      <div className="section-heading compact-heading">
        <div><SectionLabel>05 · Research</SectionLabel><h2>Evidence, <em>innovation</em> and applied healthcare research.</h2></div>
        <p>Selected publications and patent work from Dr. Chalil&rsquo;s research record.</p>
      </div>
      <div className="research-columns">
        <div>
          <div className="mini-title"><BookOpen size={16} /> Selected publications</div>
          {publications.map((item, index) => <div className="research-row" key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}
        </div>
        <div>
          <div className="mini-title">Patents &amp; inventions</div>
          {patents.map(([id, title, year]) => <div className="research-row patent-row" key={id}><span>{year}</span><div><strong>{id}</strong><p>{title}</p></div></div>)}
        </div>
      </div>
    </section>
  );
}