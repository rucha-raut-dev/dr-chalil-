import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../../components/ui";

export const metadata: Metadata = {
  title: "Contact | Dr. Joseph M. Chalil",
  description: "Let's start a meaningful conversation.",
};

export default function ContactPage() {
  return (
    <section id="contact" className="contact-section">
      <div className="shell contact-grid">
        <div><SectionLabel>09 · Connect</SectionLabel><h2>Let&rsquo;s start a <em>meaningful conversation.</em></h2><p>For professional, media, speaking, advisory or collaboration enquiries, connect through the official Dr. Chalil website.</p></div>
        <div className="contact-links">
          <a href="mailto:info@drchalil.com"><Mail size={17} /> Professional enquiries <ArrowUpRight size={15} /></a>
          <Link href="/videos"><span>MEDIA</span> Interviews &amp; public commentary <ArrowUpRight size={15} /></Link>
          <Link href="/books"><span>BOOKS</span> Author &amp; publications <ArrowUpRight size={15} /></Link>
        </div>
      </div>
    </section>
  );
}