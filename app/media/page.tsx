import type { Metadata } from "next";
import Image from "next/image";
import { Play } from "lucide-react";
import { SectionLabel, ArrowLink } from "../../components/ui";
import { media } from "../../lib/data";

export const metadata: Metadata = {
  title: "Media | Dr. Joseph M. Chalil",
  description: "Healthcare, policy and public conversation.",
};

export default function MediaPage() {
  return (
    <section id="media" className="section media-section">
      <div className="shell">
        <div className="section-heading compact-heading">
          <div><SectionLabel>07 · Media</SectionLabel><h2>Healthcare, policy and <em>public conversation.</em></h2></div>
          <p>Recent interviews and commentary across Indian and international news platforms.</p>
        </div>
        <div className="media-grid">
          {media.map(([image, title], index) => (
            <article className={`media-card ${index === 0 ? "featured" : ""}`} key={title}>
              <div className="media-image"><Image src={image} alt={title} fill sizes="(max-width: 900px) 100vw, 33vw" className="video-img" /><span className="play"><Play size={15} fill="currentColor" /></span></div>
              <div className="media-title"><span>0{index + 1}</span><h3>{title}</h3></div>
            </article>
          ))}
        </div>
        <div className="media-footer">
          <ArrowLink href="/media">
  View all media &amp; news
</ArrowLink>
{" "}
          <ArrowLink href="/gallery">View photo gallery</ArrowLink>
        </div>
      </div>
    </section>
  );
}