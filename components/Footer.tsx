export default function Footer() {
  return (
    <footer>
      <div className="shell footer-inner">
        <div className="brand"><span className="brand-mark">JC</span><span>Joseph M. Chalil</span></div>
        <p>MBBS · MBA · FACHE · Global Healthcare Executive &amp; Author</p>
        <span>© {new Date().getFullYear()} Dr. Joseph M. Chalil</span>
      </div>
    </footer>
  );
}