import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/collection", label: "Collection" },
  { href: "/visit", label: "Visit Us" },
];

export function Nav() {
  return (
    <nav className="relative z-30 flex items-center justify-between gap-6 border-b border-flame/40 px-6 py-4 sm:px-10">
      <div className="flex items-center gap-4">
        <Image
          src={IMAGES.cyprusEmblem.src}
          alt={IMAGES.cyprusEmblem.alt}
          width={IMAGES.cyprusEmblem.width}
          height={IMAGES.cyprusEmblem.height}
          className="h-10 w-auto"
        />
        <Image
          src={IMAGES.departmentOfAntiquities.src}
          alt={IMAGES.departmentOfAntiquities.alt}
          width={IMAGES.departmentOfAntiquities.width}
          height={IMAGES.departmentOfAntiquities.height}
          className="h-10 w-auto"
        />
        <div className="border-l border-flame pl-4 leading-tight">
          <p className="type-pre-title text-ink/70">Archaeological Museum</p>
          <p className="font-display text-base font-medium text-ink">
            Pafos District
          </p>
        </div>
      </div>

      <ul className="hidden items-center gap-10 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="type-pre-title text-ink/80 transition-colors hover:text-flame"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <ThemeToggle />
    </nav>
  );
}
