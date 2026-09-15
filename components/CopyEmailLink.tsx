"use client";

import { Mail, ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";

// Plain `mailto:` links only work if the visitor's device has a default
// mail app configured. On phones/Chromebooks without one, the browser
// shows an app picker that leads nowhere. Copying the address to the
// clipboard instead works everywhere, with no dependency on device setup.

export default function CopyEmailLink({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API blocked (rare/older browsers) — fall back to
      // attempting the mail app directly.
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button type="button" onClick={handleClick} className="contact-link-button">
      <Mail size={17} />
      {copied ? "Email copied!" : "Professional enquiries"}
      {copied ? <Check size={15} /> : <ArrowUpRight size={15} />}
    </button>
  );
}