import { FaAmazon, FaXTwitter, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa6";

const LINKS = [
  {
    name: "Amazon",
    href: "https://amazon.com/dp/1735904813",
    Icon: FaAmazon,
    brand: "#FF9900",
  },
  {
    name: "X",
    href: "https://twitter.com/Dr_Chalil",
    Icon: FaXTwitter,
    brand: "#ffffff",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/drchalil",
    Icon: FaLinkedinIn,
    brand: "#0A66C2",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/drchalil",
    Icon: FaFacebookF,
    brand: "#1877F2",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@drchalil",
    Icon: FaYoutube,
    brand: "#FF0000",
  },
];

export default function SocialBar() {
  return (
    <div className="social-links">
      {LINKS.map(({ name, href, Icon, brand }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={`Connect with Dr. Joseph M. Chalil on ${name}`}
          title={name}
          style={{ "--brand": brand } as React.CSSProperties}
        >
          <Icon size={15} />
        </a>
      ))}
    </div>
  );
}