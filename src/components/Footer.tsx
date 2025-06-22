// components/Footer.tsx
import { siteConfig } from "../data/config";

export default function Footer() {
  return (
    <footer
      className="
        py-6
        bg-[#0B0B0B] text-[#E5E5E5]
        text-center text-sm
        px-4 sm:px-6 lg:px-8
      "
    >
      © {new Date().getFullYear()} {siteConfig.name} — In quiet flow, may it
      endure.
    </footer>
  );
}
