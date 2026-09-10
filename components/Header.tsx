"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MobileNav from "./MobileNav";
import { navItems } from "../lib/data";

export default function Header() {
  const [mediaOpen, setMediaOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMediaOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-mark">JC</span>
        <span>Joseph M. Chalil</span>
      </Link>

      <nav aria-label="Primary navigation">
        {navItems.map((item) =>
          item.label === "Media" ? (
            <div
              className={`nav-dropdown ${mediaOpen ? "open" : ""}`}
              key={item.label}
              ref={dropdownRef}
            >
              <button
                type="button"
                className="nav-dropdown-trigger"
                onClick={() => setMediaOpen((prev) => !prev)}
                aria-expanded={mediaOpen}
              >
                Media
                <ChevronDown
                  size={14}
                  className={mediaOpen ? "rotate-arrow" : ""}
                />
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