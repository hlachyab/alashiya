/*
  Single source of truth for upcoming events on the home-page clock.
  Order matters — the array order is the order around the arc (top → middle → bottom).
*/

export type EventInfo = {
  id: string;
  month: string;
  day: string;
  category: string;
  title: string;
  description: string;
  time: string;
  date: string;
  location: string;
};

export const UPCOMING_EVENTS: EventInfo[] = [
  {
    id: "feb-7",
    month: "Feb",
    day: "7",
    category: "Workshop",
    title: "Pottery Restoration",
    description: "Hands-on session reconstructing a Bronze Age vessel.",
    time: "2:00 PM",
    date: "Feb 7, 2026",
    location: "Workshop Room",
  },
  {
    id: "apr-26",
    month: "Apr",
    day: "26",
    category: "Exhibition",
    title: "Ancient Exhibition",
    description: "Explore the mysteries of ancient Cyprus.",
    time: "10:00 AM",
    date: "Apr 26, 2026",
    location: "Gallery A",
  },
  {
    id: "aug-2",
    month: "Aug",
    day: "2",
    category: "Talk",
    title: "Roman Cyprus",
    description: "Curator-led tour through the Roman period collection.",
    time: "6:30 PM",
    date: "Aug 2, 2026",
    location: "Auditorium",
  },
];
