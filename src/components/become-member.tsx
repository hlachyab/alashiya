import Link from "next/link";
import { Reveal } from "./reveal";

export function BecomeMember() {
  return (
    <section className="relative overflow-hidden">
      {/* Placeholder backdrop until museum interior photos arrive.
          Swap this div for a next/image once the asset is in the registry. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, #2a3a4a 0%, #4a3a2a 45%, #3a2f24 100%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-black/35" />

      <div className="relative px-6 py-20 sm:px-10 lg:py-28">
        <Reveal className="max-w-2xl bg-black/55 p-8 backdrop-blur-sm sm:p-12">
          <h2 className="font-display text-3xl font-normal leading-tight tracking-[-0.02em] text-[#efe7d5] lg:text-5xl">
            Become a Member
          </h2>
          <p className="mt-5 max-w-md type-body text-[#efe7d5]/75">
            Enjoy exclusive events, access to exhibitions and the Members&apos;
            Room, plus discounts in the Museum souvenir shops.
          </p>
          <Link
            href="/membership"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-flame px-6 py-3 type-pre-title text-white transition-colors hover:bg-flame/90"
          >
            Find Out More
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
