"use client";

import { useState } from "react";
import { type EventInfo, UPCOMING_EVENTS } from "@/lib/events";
import { EventCard } from "./event-card";

const W = 280;
const H = 580;
const CX = -10;
const CY = H / 2;
const R = 250;
const MARKER_ANGLES = [-55, 0, 55] as const;

function polar(angleDeg: number, r = R) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

export function EventClock() {
  const [active, setActive] = useState<EventInfo | null>(null);
  const top = polar(-90);
  const bottom = polar(90);

  return (
    <>
      {/* Desktop: arc */}
      <div className="relative hidden h-full w-full text-ink lg:block">
        <svg
          viewBox={`-30 0 ${W + 30} ${H}`}
          className="h-full w-full"
          preserveAspectRatio="xMaxYMid meet"
        >
          <line x1={CX} y1={top.y - 18} x2={CX} y2={top.y + 6} stroke="currentColor" strokeWidth="1.4" />
          <line x1={CX} y1={bottom.y - 6} x2={CX} y2={bottom.y + 18} stroke="currentColor" strokeWidth="1.4" />

          <path
            d={`M ${top.x} ${top.y} A ${R} ${R} 0 0 1 ${bottom.x} ${bottom.y}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />

          {[-30, 30].map((angle) => {
            const inner = polar(angle, R - 10);
            const outer = polar(angle, R + 10);
            return (
              <line
                key={angle}
                x1={inner.x}
                y1={inner.y}
                x2={outer.x}
                y2={outer.y}
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.45"
              />
            );
          })}

          {UPCOMING_EVENTS.map((event, i) => {
            const angle = MARKER_ANGLES[i];
            const { x, y } = polar(angle);
            const isActive = active?.id === event.id;
            return (
              <g
                key={event.id}
                onClick={() => setActive(event)}
                className="cursor-pointer"
              >
                <circle
                  cx={x}
                  cy={y}
                  r="22"
                  fill="var(--ink)"
                  stroke={isActive ? "var(--flame)" : "currentColor"}
                  strokeWidth={isActive ? 2 : 1}
                />
                <text
                  x={x}
                  y={y - 3}
                  textAnchor="middle"
                  fontSize="9"
                  fill="var(--bg)"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {event.month}
                </text>
                <text
                  x={x}
                  y={y + 9}
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="700"
                  fill="var(--bg)"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {event.day}
                </text>
              </g>
            );
          })}

          <g transform={`translate(${CX + 30}, ${CY})`}>
            <circle r="14" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <line x1="0" y1="0" x2="0" y2="-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="0" y1="0" x2="6" y2="0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      {/* Mobile: horizontal pills */}
      <div className="flex flex-col items-center gap-4 px-6 py-10 lg:hidden">
        <p className="type-pre-title text-flame">Upcoming Events</p>
        <div className="flex items-center justify-center gap-4">
          {UPCOMING_EVENTS.map((event) => {
            const isActive = active?.id === event.id;
            return (
              <button
                key={event.id}
                type="button"
                onClick={() => setActive(event)}
                className={`flex h-16 w-16 flex-col items-center justify-center rounded-full bg-ink text-bg transition-transform hover:scale-105 ${
                  isActive ? "ring-2 ring-flame ring-offset-2 ring-offset-bg" : ""
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-[9px] uppercase leading-none">
                  {event.month}
                </span>
                <span className="text-base font-bold leading-none">
                  {event.day}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {active && <EventCard event={active} onClose={() => setActive(null)} />}
    </>
  );
}
