import type { Metadata } from "next";
import Image from "next/image";
import { SectionLabel } from "../../components/ui";
import { gallery } from "../../lib/data";

export const metadata: Metadata = {
  title: "Gallery | Dr. Joseph M. Chalil",
  description: "Leadership in the room.",
};

export default function GalleryPage() {
  return (
    <section className="section shell gallery-section">
      <div className="section-heading compact-heading">
        <div><SectionLabel>08 · Gallery</SectionLabel><h2>Leadership in <em>the room.</em></h2></div>
        <p>A small selection from the extensive photography archive on the official site.</p>
      </div>
      <div className="gallery-grid">
        {gallery.map(([image, alt], index) => <div className={`gallery-item gallery-${index + 1}`} key={image}><Image src={image} alt={alt} fill sizes="(max-width: 900px) 100vw, 50vw" className="gallery-img" /></div>)}
      </div>
    </section>
  );
}