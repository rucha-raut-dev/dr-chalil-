import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { navItems } from "../lib/data";

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-mark">JC</span>
        <span>Joseph M. Chalil</span>
      </Link>

      <nav aria-label="Primary navigation">
        {navItems.map((item) =>
          item.label === "Media" ? (
            <div className="nav-dropdown" key={item.label}>
              <button className="nav-dropdown-trigger">
                Media <ChevronDown size={14} />
              </button>

              <div className="nav-dropdown-menu">
                <Link href="/news">News</Link>
                <Link href="/videos">Videos</Link>
                <Link href="/gallery">Photo Gallery</Link>
              </div>
            </div>
          ) : (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          )
        )}
      </nav>

      <Link className="header-cta" href="/contact">
        Connect <ArrowUpRight size={14} />
      </Link>

      <MobileNav />
    </header>
  );
}