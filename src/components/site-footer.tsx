import Image from "next/image";
import Link from "next/link";
import {
  FOOTER_ACCESSIBILITY,
  FOOTER_HOURS,
  FOOTER_SITEMAP,
  MUSEUM_CONTACT,
} from "@/lib/footer";
import { IMAGES } from "@/lib/images";

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-ink">
      <div className="grid grid-cols-1 gap-12 px-6 py-16 sm:px-10 lg:grid-cols-4 lg:gap-10 lg:py-20">
        {/* Brand + contact */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src={IMAGES.departmentOfAntiquities.src}
              alt={IMAGES.departmentOfAntiquities.alt}
              width={IMAGES.departmentOfAntiquities.width}
              height={IMAGES.departmentOfAntiquities.height}
              className="h-9 w-auto brightness-0 invert"
            />
            <div className="leading-tight">
              <p className="type-pre-title text-footer-ink/60">
                Archaeological Museum
              </p>
              <p className="font-display text-base font-medium">
                Pafos District
              </p>
            </div>
          </div>
          <p className="mt-6 type-small text-footer-ink/60">
            {MUSEUM_CONTACT.address}
          </p>
          <p className="mt-2 type-small text-footer-ink/60">
            {MUSEUM_CONTACT.tel}
          </p>
          <Link
            href="/visit"
            className="mt-2 inline-block type-small text-flame underline-offset-2 hover:underline"
          >
            Find public transport ↗
          </Link>
          <p className="mt-6 max-w-xs type-small text-footer-ink/45">
            {MUSEUM_CONTACT.blurb}
          </p>
        </div>

        {/* Sitemap */}
        <nav>
          <p className="type-pre-title text-flame">Sitemap</p>
          <ul className="mt-5 space-y-3">
            {FOOTER_SITEMAP.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="type-body text-footer-ink/70 transition-colors hover:text-footer-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Accessibility */}
        <div>
          <p className="type-pre-title text-flame">Accessibility</p>
          <ul className="mt-5 space-y-3">
            {FOOTER_ACCESSIBILITY.map((item) => (
              <li key={item} className="type-body text-footer-ink/70">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Hours + newsletter */}
        <div>
          <p className="type-pre-title text-flame">Opening Hours</p>
          <ul className="mt-5 space-y-2">
            {FOOTER_HOURS.map((line) => (
              <li key={line} className="type-body text-footer-ink/70">
                {line}
              </li>
            ))}
          </ul>

          <form
            className="mt-8"
            action="/newsletter"
            aria-label="Newsletter sign-up"
          >
            <p className="font-display text-lg font-medium">
              Subscribe to Our newsletter
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Submit your email"
                className="min-w-0 flex-1 rounded-md bg-footer-ink/10 px-4 py-2.5 type-small text-footer-ink placeholder:text-footer-ink/40 focus:outline-none focus:ring-1 focus:ring-flame"
              />
              <button
                type="submit"
                className="rounded-md bg-flame px-5 py-2.5 type-pre-title text-white transition-colors hover:bg-flame/90"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-3 type-small text-flame/80">
              Free admission, no booking required
            </p>
          </form>
        </div>
      </div>

      <div className="border-t border-footer-ink/10 px-6 py-5 sm:px-10">
        <p className="type-small text-footer-ink/45">
          © 2026 Dept. of Antiquities, Cyprus · Archaeological Museum Pafos ·
          All rights reserved
        </p>
      </div>

      {/* Greek-key meander band */}
      <div className="meander" aria-hidden />
    </footer>
  );
}
