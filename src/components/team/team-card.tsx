import Image from "next/image";
import { IMAGES } from "@/lib/images";
import type { TeamMember } from "@/lib/team";

/*
  Neutral greyscale placeholder fills until portrait photography lands (same
  approach as collection-card / news-section, but cool-toned to read like the
  black-and-white headshots in the Figma). Cycled by index so adjacent cards
  never share a fill. Real photos slot in via the IMAGES registry.
*/
const PLACEHOLDER_TINTS = [
  "linear-gradient(135deg, #cdccc7 0%, #a4a39d 100%)",
  "linear-gradient(135deg, #c4c3bd 0%, #9a9992 100%)",
  "linear-gradient(135deg, #d2d1cb 0%, #abaaa3 100%)",
  "linear-gradient(135deg, #c0bfb8 0%, #95948d 100%)",
  "linear-gradient(135deg, #c8c7c0 0%, #a09f97 100%)",
];

export function TeamCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const photo = member.image ? IMAGES[member.image] : null;

  return (
    <article className="flex flex-col">
      <div className="h-[3px] w-full bg-gold" />
      <div className="relative aspect-5/4 overflow-hidden bg-bg">
        {photo ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 18vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover grayscale"
          />
        ) : (
          <div
            aria-hidden
            className="h-full w-full"
            style={{
              background:
                PLACEHOLDER_TINTS[index % PLACEHOLDER_TINTS.length],
            }}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col items-center bg-bg px-3 py-4 text-center">
        <h3 className="font-hero text-base font-medium leading-tight text-ink lg:text-lg">
          {member.name}
        </h3>
        <p className="mt-1.5 type-small text-ink/55">{member.role}</p>
      </div>
    </article>
  );
}
