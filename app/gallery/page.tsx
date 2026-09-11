import type { Metadata } from "next";
import { SectionLabel } from "../../components/ui";
import GalleryGrid from "../../components/GalleryGrid";
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
        <p>Highlights from events, media appearances and milestones over the years. Click any photo to view it larger.</p>
      </div>
      <GalleryGrid gallery={gallery} />
    </section>
  );
}
