"use client";

import {
  makes,
  fuelTypes,
  transmissions,
  bodyTypes,
  priceRanges,
} from "@/data/cars";

export interface Filters {
  make: string;
  priceRange: number;
  fuel: string;
  transmission: string;
  bodyType: string;
}

interface FilterBarProps {
  filters: Filters;
  onFilterChange: (key: keyof Filters, value: string | number) => void;
  onClearFilters: () => void;
  resultCount: number;
}

export default function FilterBar({
  filters,
  onFilterChange,
  onClearFilters,
  resultCount,
}: FilterBarProps) {
  const hasActiveFilters =
    filters.make ||
    filters.priceRange !== 0 ||
    filters.fuel ||
    filters.transmission ||
    filters.bodyType;

  return (
    <nav className="sticky top-0 z-10 border-b border-[var(--border-light)] bg-[var(--card-background)] shadow-[var(--shadow-sm)]">
      <div className="mx-auto max-w-7xl px-4 py-4">
        {/* Filter Row */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Make Filter */}
          <select
            value={filters.make}
            onChange={(e) => onFilterChange("make", e.target.value)}
            className="filter-select h-11 min-w-[140px] rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-white px-4 text-sm text-[var(--text-primary)] transition-[border-color,box-shadow] duration-[var(--transition-fast)]"
          >
            <option value="">All Makes</option>
            {makes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>

          {/* Price Range Filter */}
          <select
            value={filters.priceRange}
            onChange={(e) =>
              onFilterChange("priceRange", Number(e.target.value))
            }
            className="filter-select h-11 min-w-[160px] rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-white px-4 text-sm text-[var(--text-primary)] transition-[border-color,box-shadow] duration-[var(--transition-fast)]"
          >
            {priceRanges.map((range, index) => (
              <option key={range.label} value={index}>
                {range.label}
              </option>
            ))}
          </select>

          {/* Fuel Type Filter */}
          <select
            value={filters.fuel}
            onChange={(e) => onFilterChange("fuel", e.target.value)}
            className="filter-select h-11 min-w-[130px] rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-white px-4 text-sm text-[var(--text-primary)] transition-[border-color,box-shadow] duration-[var(--transition-fast)]"
          >
            <option value="">All Fuel Types</option>
            {fuelTypes.map((fuel) => (
              <option key={fuel} value={fuel}>
                {fuel}
              </option>
            ))}
          </select>

          {/* Transmission Filter */}
          <select
            value={filters.transmission}
            onChange={(e) => onFilterChange("transmission", e.target.value)}
            className="filter-select h-11 min-w-[140px] rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-white px-4 text-sm text-[var(--text-primary)] transition-[border-color,box-shadow] duration-[var(--transition-fast)]"
          >
            <option value="">All Transmissions</option>
            {transmissions.map((trans) => (
              <option key={trans} value={trans}>
                {trans}
              </option>
            ))}
          </select>

          {/* Body Type Filter */}
          <select
            value={filters.bodyType}
            onChange={(e) => onFilterChange("bodyType", e.target.value)}
            className="filter-select h-11 min-w-[130px] rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-white px-4 text-sm text-[var(--text-primary)] transition-[border-color,box-shadow] duration-[var(--transition-fast)]"
          >
            <option value="">All Body Types</option>
            {bodyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="h-11 rounded-[var(--radius-md)] bg-[var(--pakwheels-blue)] px-5 text-sm font-medium text-white transition-colors duration-[var(--transition-fast)] hover:bg-[var(--pakwheels-blue-dark)]"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Results Count */}
        <p className="mt-3 text-sm text-[var(--text-secondary)]">
          Showing{" "}
          <span className="font-semibold text-[var(--text-primary)]">
            {resultCount}
          </span>{" "}
          vehicle{resultCount !== 1 ? "s" : ""}
        </p>
      </div>
    </nav>
  );
}
