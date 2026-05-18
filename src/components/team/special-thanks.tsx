import { SPECIAL_THANKS } from "@/lib/team";
import { Reveal } from "../reveal";

export function SpecialThanks() {
  return (
    <section className="bg-surface px-6 py-24 lg:px-20 lg:py-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-hero text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-ink lg:text-[2.75rem]">
          {SPECIAL_THANKS.heading}
        </h2>
        <p className="mt-5 font-hero text-xl font-medium text-flame lg:text-2xl">
          {SPECIAL_THANKS.subject}
        </p>
        <p className="mx-auto mt-6 max-w-xl type-body leading-relaxed text-ink/65">
          {SPECIAL_THANKS.body}
        </p>
      </Reveal>
    </section>
  );
}
