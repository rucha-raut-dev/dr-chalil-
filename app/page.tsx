"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Award, BookOpen, GraduationCap, Mail, Play } from "lucide-react";
import MobileNav from "../components/MobileNav";

const heroImage = "https://drchalil.com/wp-content/uploads/2026/05/Dr.-Joseph-M-Chalil.webp";

const career = [
  ["Present", "U.S. Country Manager & Strategic Advisor", "ICHORtec GmbH"],
  ["Present", "Managing Partner", "Parker Lloyd LLC"],
  ["2025–Present", "Chief Medical Advisor", "Geneva Private Equity"],
  ["Dec 2025–Present", "Honorary Advisor, Advisory Board", "Nirogya Life Line Foundation (NLLF)"],
  ["2025–Present", "Member, Philanthropy Advisory Board", "Ron and Kathy Assaf College of Nursing, NSU"],
  ["", "Member, Advisory Board", "Truvian Sciences"],
  ["", "Clinical Advisor", "Third Pole Therapeutics"],
  ["", "Adjunct Professor & Chairman, Health System Advisory Board", "Nova Southeastern University"],
  ["", "Publisher", "The Universal News Network / TheUNN.com"],
  ["", "Member, Strategic Advisory Board", "Psychocare Health Pvt Ltd"],
  ["Former", "Chief Medical Officer", "Novo Integrated Sciences, Inc."],
  ["Former", "Chief Strategic Adviser", "American Association of Physicians of Indian Origin (AAPI)"],
];

const education = [
  ["2023–2026", "Master of Laws — Medical Law & Ethics", "University of Edinburgh Law School"],
  ["2021", "Global Healthcare Delivery Certification", "Harvard University"],
  ["2009", "FACHE — Fellowship", "American College of Healthcare Executives"],
  ["2004", "MBA — Healthcare Administration", "Davenport University"],
  ["2003", "Hospital Administration Fellowship", "Henry Ford Hospital"],
  ["1998", "M.B.B.S.", "JJM Medical College, Davengere"],
];

const publications = [
  "The Impact of Allergy Specialty Care on Health care utilization among Peanut Allergy Children in the United States — JACI in Practice (2022)",
  "Peanut cross-contamination in randomly selected baked goods — Annals of Allergy, Asthma & Immunology (2022)",
  "Commercial claims costs related to healthcare resource use associated with a diagnosis of peanut allergy — Annals of Allergy, Asthma & Immunology (2020)",
  "Economic Burden of Disease Among Peanut-Allergic Children — Annals of Allergy, Asthma & Immunology (2019)",
  "Patient Experiences Following the OLFUS VIPES Phase IIb Epicutaneous Immunotherapy Trial — Annals of Allergy & Asthma Immunology (2019)",
  "Perceptions Among Peanut-Allergic Children: A Survey — Annals of Allergy & Asthma Immunology (2019)",
  "Healthcare Resource Use (HCRU) and Costs Associated With Peanut Allergy — Value in Health (2019)",
  "The Significance of Cardiopulmonary Exercise Testing (CPX) on the management of Dyspnea — AJRCCM (2002)",
];

const patents = [
  ["US 8,101,469", "Method of Forming Monolithic CMOS-MEMS Hybrid Integrated, Packaged Structures", "2012"],
  ["US 8,101,458", "Method of Forming Monolithic CMOS-MEMS Hybrid Integrated, Packaged Structures", "2012"],
  ["US 7,989,248", "Method of Forming Monolithic CMOS-MEMS Hybrid Integrated, Packaged Structures", "2011"],
  ["WO2011003057A2 / A3", "Monolithic CMOS-MEMS hybrid integrated and stacked structures", "2011"],
  ["US 12/547,191", "Flexible Penetrating Electrodes For Neuronal Stimulation and Recording", "2009"],
  ["US 61/237,407", "Intelligent CMOS MEMS Drug Delivery System", "2009"],
];

const awards = [
  ["2023", "Presidential Award for Leadership", "American Association of Physicians of Indian Origin (AAPI)"],
  ["2022", "Top Physician of the Year", "International Association of Top Professionals (IAOTP)"],
  ["2021", "World-Class Media Influencer", "MSP News Global"],
  ["2015", "National Presidential Award", "American Association of Physicians of Indian Origin (AAPI)"],
  ["2013", "Outstanding Top 50 Asian Americans in Business Award", "Asian American Business Development Center"],
  ["2013", "New York Presidential Award", "AAPI Regional Conference"],
  ["2013", "Honoree", "American Association of Cardiologists of Indian Origin (AACIO)"],
  ["2011 / 2014", "President's Club Winner", "Boehringer Ingelheim"],
  ["2015", "Executive in Residence Program", "Ashoka & Boehringer Ingelheim"],
];

const books = [
  {
    title: "India Beyond The Pandemic",
    meta: "With Pradeep K. Kapur & M.D. Nalapat",
    description: "A sustainable path towards global quality healthcare, examining how India can navigate and recover from the COVID-19 crisis.",
    image: "https://m.media-amazon.com/images/I/41oxxwJMffL._SY445_SX342_.jpg",
    href: "https://indiabeyondthepandemic.com/",
  },
  {
    title: "Beyond the COVID-19 Pandemic",
    meta: "With Pradeep Kapur · 2020",
    description: "Envisioning a better world by transforming the future of healthcare through sustainable and revolutionary delivery models.",
    image: "https://images-na.ssl-images-amazon.com/images/P/1735904813.01.LZZZZZZZ.jpg",
    href: "https://beyondcovidbook.com/",
  },
];

const media = [
  ["https://i.ytimg.com/vi/UaK0RDGgdFg/hqdefault.jpg", "Trump–Modi G7 Meet, US–Iran MoU, and Global Leadership Dynamics"],
  ["https://i.ytimg.com/vi/hW9GavN4vbk/hqdefault.jpg", "Iran–US Standoff at Strait of Hormuz"],
  ["https://i.ytimg.com/vi/6lDBxNBGcEw/hqdefault.jpg", "NDTV Profit: Iran Conflict, Energy Security & Global Affairs"],
];

const gallery = [
  ["https://drchalil.com/wp-content/uploads/photo-gallery/imported_from_media_libray/thumb/Dr.-Chalil-at-AAPI-Event-1.jpg?bwg=1788845320", "AAPI event"],
  ["https://drchalil.com/wp-content/uploads/2026/05/Dr.-Joseph-M-Chalil.webp", "Executive portrait"],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

function ArrowLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a className="text-link" href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {children}<ArrowUpRight size={15} />
    </a>
  );
}

export default function Home() {
  const [showAllMedia, setShowAllMedia] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home">
          <span className="brand-mark">JC</span>
          <span>Joseph M. Chalil</span>
        </a>
        <nav aria-label="Primary navigation">
          {["About", "Career", "Education", "Books", "Research", "Awards", "Media", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Connect <ArrowUpRight size={14} /></a>
        <MobileNav />
      </header>

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
            <a className="button dark" href="#about">Explore profile <ArrowUpRight size={15} /></a>
            <a className="button light" href="#books">View books</a>
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

      <section id="about" className="section shell about-section">
        <div className="section-index"><SectionLabel>01 · About</SectionLabel></div>
        <div className="about-grid">
          <h2>A physician executive at the intersection of <em>healthcare, strategy and policy.</em></h2>
          <div className="about-copy">
            <p>Dr. Chalil combines medical training with executive leadership, healthcare administration, public policy, research, academia and authorship. His work spans healthcare enterprises, strategic advisory roles and public media.</p>
            <p>He is an LLM Medical Law &amp; Ethics candidate at the University of Edinburgh Law School, a Fellow of the American College of Healthcare Executives, and a Harvard Global Healthcare Delivery certification holder.</p>
            <ArrowLink href="#career">View leadership journey</ArrowLink>
          </div>
        </div>
      </section>

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

      <section id="research" className="section shell research-section">
        <div className="section-heading compact-heading">
          <div><SectionLabel>05 · Research</SectionLabel><h2>Evidence, <em>innovation</em> and applied healthcare research.</h2></div>
          <p>Selected publications and patent work from Dr. Chalil’s research record.</p>
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

      <section id="media" className="section media-section">
        <div className="shell">
          <div className="section-heading compact-heading">
            <div><SectionLabel>07 · Media</SectionLabel><h2>Healthcare, policy and <em>public conversation.</em></h2></div>
            <p>Recent interviews and commentary across Indian and international news platforms.</p>
          </div>
          <div className="media-grid">
            {media.slice(0, showAllMedia ? media.length : 3).map(([image, title], index) => (
              <article className={`media-card ${index === 0 ? "featured" : ""}`} key={title}>
                <div className="media-image"><Image src={image} alt={title} fill sizes="(max-width: 900px) 100vw, 33vw" className="video-img" /><span className="play"><Play size={15} fill="currentColor" /></span></div>
                <div className="media-title"><span>0{index + 1}</span><h3>{title}</h3></div>
              </article>
            ))}
          </div>
          <div className="media-footer">
            <button
              className="text-link"
              type="button"
              onClick={() => setShowAllMedia(!showAllMedia)}
            >
              {showAllMedia ? "Show less" : "View all media & news"}
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </section>

      <section className="section shell gallery-section">
        <div className="section-heading compact-heading">
          <div><SectionLabel>08 · Gallery</SectionLabel><h2>Leadership in <em>the room.</em></h2></div>
          <p>A small selection from the extensive photography archive on the official site.</p>
        </div>
        <div className="gallery-grid">
          {gallery.map(([image, alt], index) => <div className={`gallery-item gallery-${index + 1}`} key={image}><Image src={image} alt={alt} fill sizes="(max-width: 900px) 100vw, 50vw" className="gallery-img" /></div>)}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="shell contact-grid">
          <div><SectionLabel>09 · Connect</SectionLabel><h2>Let’s start a <em>meaningful conversation.</em></h2><p>For professional, media, speaking, advisory or collaboration enquiries, connect through the official Dr. Chalil website.</p></div>
          <div className="contact-links">
            <a href="mailto:info@drchalil.com"><Mail size={17} /> Professional enquiries <ArrowUpRight size={15} /></a>
            <a href="#media"><span>MEDIA</span> Interviews &amp; public commentary <ArrowUpRight size={15} /></a>
            <a href="#books"><span>BOOKS</span> Author &amp; publications <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <div className="brand"><span className="brand-mark">JC</span><span>Joseph M. Chalil</span></div>
          <p>MBBS · MBA · FACHE · Global Healthcare Executive &amp; Author</p>
          <span>© {new Date().getFullYear()} Dr. Joseph M. Chalil</span>
        </div>
      </footer>
    </main>
  );
}
