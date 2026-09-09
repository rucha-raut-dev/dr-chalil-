import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

export function ArrowLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  if (external) {
    return (
      <a className="text-link" href={href} target="_blank" rel="noreferrer">
        {children}<ArrowUpRight size={15} />
      </a>
    );
  }
  return (
    <Link className="text-link" href={href}>
      {children}<ArrowUpRight size={15} />
    </Link>
  );
}