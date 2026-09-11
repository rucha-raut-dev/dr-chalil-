import type { Metadata } from "next";
import { SectionLabel } from "../../components/ui";
import VideoGrid from "../../components/VideoGrid";
import { videos } from "../../lib/data";

export const metadata: Metadata = {
  title: "Videos | Dr. Joseph M. Chalil",
  description: "Videos, interviews and media appearances of Dr. Joseph M. Chalil.",
};

export default function VideosPage() {
  return (
    <section className="section media-section">
      <div className="shell">
        <div className="section-heading compact-heading">
          <div>
            <SectionLabel>08 · Videos</SectionLabel>
            <h2>
              Videos &amp; <em>Interviews.</em>
            </h2>
          </div>
          <p>Interviews, discussions and appearances across different media platforms. Videos play right here on the page.</p>
        </div>

        <VideoGrid videos={videos} />
      </div>
    </section>
  );
}

