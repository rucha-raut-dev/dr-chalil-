import SocialBar from "./SocialBar";

export default function Footer() {
  return (
    <footer>
      <div className="shell footer-top">
        <div className="brand">
          <span className="brand-mark">JC</span>
          <span>Dr. Joseph M. Chalil</span>
        </div>
        <p className="footer-tagline">MBBS · MBA · FACHE · Global Healthcare Executive &amp; Author</p>
        <SocialBar />
      </div>

      <div className="footer-divider" />

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Dr. Joseph M. Chalil. All rights reserved.</span>
      </div>
    </footer>
  );
}