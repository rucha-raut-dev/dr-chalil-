"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../lib/data";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button className="mobile-menu-button" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      {open && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
        </div>
      )}
    </div>
  );
}