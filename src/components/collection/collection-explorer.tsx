"use client";

import { useMemo, useState } from "react";
import {
  ALL_PERIODS,
  COLLECTION_OBJECTS,
  COLLECTION_TOTAL,
  type CollectionPeriod,
  type CollectionSort,
  sortObjects,
} from "@/lib/collection";
import { CollectionCard } from "./collection-card";
import { CollectionFilters } from "./collection-filters";
import { CollectionToolbar } from "./collection-toolbar";

type Selection = typeof ALL_PERIODS | CollectionPeriod;

export function CollectionExplorer() {
  const [period, setPeriod] = useState<Selection>(ALL_PERIODS);
  const [sort, setSort] = useState<CollectionSort>("oldest");

  // The period pills are visual-only for now: the same six objects show
  // regardless of selection. Sort is a real, harmless interaction.
  const objects = useMemo(
    () => sortObjects(COLLECTION_OBJECTS, sort),
    [sort],
  );

  return (
    <section className="bg-surface">
      <CollectionFilters active={period} onSelect={setPeriod} />

      <CollectionToolbar
        count={COLLECTION_TOTAL}
        sort={sort}
        onSortChange={setSort}
      />

      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-20 lg:pb-32">
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {objects.map((object, i) => (
            <CollectionCard key={object.id} object={object} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
