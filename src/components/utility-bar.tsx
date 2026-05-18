import Link from "next/link";

export function UtilityBar() {
  return (
    <div className="bg-olive text-olive-ink">
      <div className="flex items-center justify-between px-6 py-2 lg:px-20">
        <div className="flex items-center gap-8">
          <Link
            href="/ministry-of-culture"
            className="type-body font-medium transition-opacity hover:opacity-70"
          >
            Ministry of Culture
          </Link>
          <Link
            href="/accessibility"
            className="type-body font-medium transition-opacity hover:opacity-70"
          >
            Accessibility
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="type-body font-medium transition-opacity hover:opacity-70"
          >
            EN
          </button>
          <button
            type="button"
            className="type-body font-medium text-olive-ink/40 transition-opacity hover:opacity-100"
          >
            GR
          </button>
        </div>
      </div>
    </div>
  );
}
