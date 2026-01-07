import { SearchX } from "lucide-react";

interface EmptyStateProps {
  onClearFilters: () => void;
}

export default function EmptyState({ onClearFilters }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--pakwheels-blue-light)]">
        <SearchX className="h-10 w-10 text-[var(--pakwheels-blue)]" />
      </div>
      <h2 className="mt-6 text-xl font-semibold text-[var(--text-primary)]">
        No vehicles found
      </h2>
      <p className="mt-2 max-w-md text-[var(--text-secondary)]">
        We couldn&apos;t find any vehicles matching your current filters. Try
        adjusting your search criteria.
      </p>
      <button
        onClick={onClearFilters}
        className="mt-6 h-11 rounded-[var(--radius-md)] bg-[var(--pakwheels-blue)] px-6 text-sm font-medium text-white transition-colors duration-[var(--transition-fast)] hover:bg-[var(--pakwheels-blue-dark)]"
      >
        Clear All Filters
      </button>
    </div>
  );
}
