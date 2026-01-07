"use client";

import { useState, useMemo } from "react";
import { cars, priceRanges } from "@/data/cars";
import FilterBar, { Filters } from "@/components/FilterBar";
import VehicleGrid from "@/components/VehicleGrid";
import EmptyState from "@/components/EmptyState";

const initialFilters: Filters = {
  make: "",
  priceRange: 0,
  fuel: "",
  transmission: "",
  bodyType: "",
};

export default function StockVehiclesPage() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const handleFilterChange = (key: keyof Filters, value: string | number) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters(initialFilters);
  };

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      // Make filter
      if (filters.make && !car.title.startsWith(filters.make)) {
        return false;
      }

      // Price range filter
      if (filters.priceRange !== 0) {
        const range = priceRanges[filters.priceRange];
        if (car.price < range.min || car.price >= range.max) {
          return false;
        }
      }

      // Fuel filter
      if (filters.fuel && car.fuel !== filters.fuel) {
        return false;
      }

      // Transmission filter
      if (filters.transmission && car.transmission !== filters.transmission) {
        return false;
      }

      // Body type filter
      if (filters.bodyType && car.bodyType !== filters.bodyType) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="border-b border-[var(--border-light)] bg-[var(--card-background)]">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h1 className="text-2xl font-bold text-[var(--pakwheels-blue)] sm:text-3xl">
            Stock Vehicles
          </h1>
          <p className="mt-1 text-[var(--text-secondary)]">
            Find your perfect car from our quality selection
          </p>
        </div>
      </header>

      {/* Filter Bar */}
      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
        resultCount={filteredCars.length}
      />

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        {filteredCars.length > 0 ? (
          <VehicleGrid cars={filteredCars} />
        ) : (
          <EmptyState onClearFilters={handleClearFilters} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border-light)] bg-[var(--card-background)] py-6">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} Vizion Finance. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
