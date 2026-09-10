"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { navItems } from "../lib/data";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button
        className="mobile-menu-button"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          {navItems.map((item) =>
            item.label === "Media" ? (
              <div className="mobile-media" key={item.label}>
                <button
                  className="mobile-media-button"
                  onClick={() => setMediaOpen((value) => !value)}
                >
                  <span>Media</span>
                  <ChevronDown
                    size={14}
                    className={mediaOpen ? "rotate-arrow" : ""}
                  />
                </button>

                {mediaOpen && (
                  <div className="mobile-media-submenu">
                    <Link href="/news" onClick={() => setOpen(false)}>
                      News
                    </Link>

                    <Link href="/videos" onClick={() => setOpen(false)}>
                      Videos
                    </Link>

                    <Link href="/gallery" onClick={() => setOpen(false)}>
                      Photo Gallery
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}