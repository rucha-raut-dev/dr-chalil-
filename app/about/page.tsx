import type { Metadata } from "next";
import { SectionLabel, ArrowLink } from "../../components/ui";

export const metadata: Metadata = {
  title: "About | Dr. Joseph M. Chalil",
  description: "A physician executive at the intersection of healthcare, strategy and policy.",
};

export default function AboutPage() {
  return (
    <section id="about" className="section shell about-section">
      <div className="section-index"><SectionLabel>01 · About</SectionLabel></div>
      <div className="about-grid">
        <h2>A physician executive at the intersection of <em>healthcare, strategy and policy.</em></h2>
        <div className="about-copy">
          <p>Dr. Chalil combines medical training with executive leadership, healthcare administration, public policy, research, academia and authorship. His work spans healthcare enterprises, strategic advisory roles and public media.</p>
          <p>He is an LLM Medical Law &amp; Ethics candidate at the University of Edinburgh Law School, a Fellow of the American College of Healthcare Executives, and a Harvard Global Healthcare Delivery certification holder.</p>
          <ArrowLink href="/career">View leadership journey</ArrowLink>
        </div>
      </div>
    </section>
  );
}