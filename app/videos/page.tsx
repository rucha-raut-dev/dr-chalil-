import type { Metadata } from "next";
import { SectionLabel } from "../../components/ui";

export const metadata: Metadata = {
  title: "Videos | Dr. Joseph M. Chalil",
  description: "Videos, interviews and media appearances of Dr. Joseph M. Chalil.",
};

export default function VideosPage() {
  return (
    <section className="section shell">
      <div className="section-heading compact-heading">
        <div>
          <SectionLabel>08 · Videos</SectionLabel>
          <h2>
            Videos & <em>Interviews.</em>
          </h2>
        </div>

        <p>
          Interviews, discussions and appearances across different media platforms.
        </p>
      </div>

      <div>
        <p>Videos will appear here.</p>
      </div>
    </section>
  );
}