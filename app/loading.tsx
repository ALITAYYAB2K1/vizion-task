export default function Loading() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header Skeleton */}
      <header className="border-b border-[var(--border-light)] bg-[var(--card-background)]">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="skeleton h-8 w-48 rounded-[var(--radius-md)]" />
          <div className="skeleton mt-2 h-5 w-72 rounded-[var(--radius-sm)]" />
        </div>
      </header>

      {/* Filter Bar Skeleton */}
      <div className="border-b border-[var(--border-light)] bg-[var(--card-background)]">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-wrap gap-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="skeleton h-11 w-[140px] rounded-[var(--radius-md)]"
              />
            ))}
          </div>
          <div className="skeleton mt-3 h-5 w-32 rounded-[var(--radius-sm)]" />
        </div>
      </div>

      {/* Grid Skeleton */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[var(--radius-lg)] bg-[var(--card-background)] shadow-[var(--shadow-md)]"
            >
              {/* Image Skeleton */}
              <div className="skeleton aspect-[16/10]" />

              {/* Content Skeleton */}
              <div className="p-4">
                <div className="skeleton h-7 w-28 rounded-[var(--radius-sm)]" />
                <div className="skeleton mt-2 h-5 w-full rounded-[var(--radius-sm)]" />
                <div className="skeleton mt-1 h-5 w-3/4 rounded-[var(--radius-sm)]" />
                <div className="skeleton mt-3 h-4 w-24 rounded-[var(--radius-sm)]" />

                <div className="mt-4 grid grid-cols-2 gap-2 border-t border-[var(--border-light)] pt-4">
                  {[...Array(6)].map((_, j) => (
                    <div
                      key={j}
                      className="skeleton h-5 w-20 rounded-[var(--radius-sm)]"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
