"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const items = ["About", "Career", "Education", "Books", "Research", "Awards", "Media", "Contact"];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button className="mobile-menu-button" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      {open && (
        <div className="mobile-menu">
          {items.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>
          ))}
        </div>
      )}
    </div>
  );
}
