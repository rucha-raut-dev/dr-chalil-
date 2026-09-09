import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../components/ui";
import { heroImage, explore } from "../lib/data";

export default function Home() {
  return (
    <>
      <section id="home" className="hero shell">
        <div className="hero-copy">
          <SectionLabel>Global healthcare leadership · Strategy · Authorship</SectionLabel>
          <h1>Medicine, leadership <em>&amp; the future of healthcare.</em></h1>
          <p className="hero-lead">Dr. Joseph M. Chalil is a physician executive, author and strategist working across healthcare, policy, innovation and international affairs.</p>
          <div className="hero-meta">
            <strong>Dr. Joseph M. Chalil</strong>
            <span>MBBS · MBA · FACHE</span>
            <span>Global Healthcare Executive · Author · Strategist</span>
          </div>
          <div className="hero-actions">
            <Link className="button dark" href="/about">Explore profile <ArrowUpRight size={15} /></Link>
            <Link className="button light" href="/books">View books</Link>
          </div>
        </div>
        <div className="hero-visual">
          <Image src={heroImage} alt="Dr. Joseph M. Chalil" fill priority sizes="(max-width: 900px) 100vw, 54vw" className="hero-img" />
          <div className="hero-photo-note">Physician executive<br />and global healthcare leader</div>
        </div>
      </section>

      <section className="credential-strip shell" aria-label="Credentials">
        <div><span>01</span><strong>MBBS</strong><small>JJM Medical College</small></div>
        <div><span>02</span><strong>MBA</strong><small>Davenport University</small></div>
        <div><span>03</span><strong>FACHE</strong><small>American College of Healthcare Executives</small></div>
        <div><span>04</span><strong>LLM Candidate</strong><small>Medical Law &amp; Ethics · Edinburgh</small></div>
      </section>

      <section className="section shell">
        <div className="section-heading compact-heading">
          <div><SectionLabel>Explore</SectionLabel><h2>Every part of the <em>profile, one click away.</em></h2></div>
          <p>A physician executive at the intersection of healthcare, strategy and policy — explore his career, education, books, research, awards and media.</p>
        </div>
        <div className="explore-grid">
          {explore.map((item) => (
            <Link key={item.label} href={item.href} className="explore-card">
              <h3>{item.label}</h3>
              <p>{item.desc}</p>
              <span className="explore-arrow"><ArrowUpRight size={16} /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}