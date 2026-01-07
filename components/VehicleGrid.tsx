import { Car } from "@/data/cars";
import VehicleCard from "./VehicleCard";

interface VehicleGridProps {
  cars: Car[];
}

export default function VehicleGrid({ cars }: VehicleGridProps) {
  return (
    <section
      className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      aria-label="Vehicle listings"
    >
      {cars.map((car, index) => (
        <VehicleCard
          key={car.id}
          car={car}
          priority={index < 4} // First 4 images get priority loading
        />
      ))}
    </section>
  );
}
