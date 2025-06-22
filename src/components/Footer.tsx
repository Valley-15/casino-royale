import { siteConfig } from "../data/config";

export default function Footer() {
  return (
    <footer className="py-6 bg-white text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} {siteConfig.name} — Flowing, grounded,
      enduring.
    </footer>
  );
}
