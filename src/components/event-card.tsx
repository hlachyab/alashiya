"use client";

import { Calendar, Clock, MapPin, X } from "lucide-react";
import type { EventInfo } from "@/lib/events";

export function EventCard({
  event,
  onClose,
}: {
  event: EventInfo;
  onClose: () => void;
}) {
  return (
    <div className="fixed left-1/2 top-1/2 z-40 w-80 max-w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-ink/10 bg-surface p-6 text-ink shadow-2xl lg:left-auto lg:right-6 lg:translate-x-0">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-3 top-3 rounded-full p-1 text-ink/40 transition-colors hover:bg-ink/5 hover:text-ink"
      >
        <X className="h-4 w-4" />
      </button>

      <div className="mb-4 flex items-start justify-between gap-3 pr-6">
        <h3
          className="text-2xl font-bold leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {event.title}
        </h3>
        <span className="shrink-0 rounded-md bg-flame/85 px-2.5 py-1 text-xs font-medium text-white">
          {event.category}
        </span>
      </div>

      <p className="mb-6 text-sm text-ink/60">{event.description}</p>

      <div className="mb-6 space-y-3 text-sm">
        <Row icon={<Clock className="h-4 w-4" />} label="Time" value={event.time} />
        <Row icon={<Calendar className="h-4 w-4" />} label="Date" value={event.date} />
        <Row icon={<MapPin className="h-4 w-4" />} label="Location" value={event.location} />
      </div>

      <button
        type="button"
        className="w-full rounded-xl bg-flame py-3 font-bold text-white transition-colors hover:bg-flame/90"
      >
        Reserve Your Spot
      </button>
    </div>
  );
}

function Row({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-flame/10 text-flame">
        {icon}
      </div>
      <div>
        <p className="text-xs text-ink/50">{label}</p>
        <p className="font-bold">{value}</p>
      </div>
    </div>
  );
}
