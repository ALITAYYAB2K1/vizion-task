import Image from "next/image";
import {
  Calendar,
  Gauge,
  Fuel,
  Cog,
  Car,
  DoorOpen,
  MapPin,
} from "lucide-react";
import { Car as CarType } from "@/data/cars";

interface VehicleCardProps {
  car: CarType;
  priority?: boolean;
}

export default function VehicleCard({
  car,
  priority = false,
}: VehicleCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat("en-GB").format(mileage);
  };

  return (
    <article className="card-hover group overflow-hidden rounded-[var(--radius-lg)] bg-[var(--card-background)] shadow-[var(--shadow-md)]">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <Image
          src={car.image}
          alt={`${car.year} ${car.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="image-zoom object-cover"
          priority={priority}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Price */}
        <p className="text-2xl font-bold text-[var(--pakwheels-blue)]">
          {formatPrice(car.price)}
        </p>

        {/* Title */}
        <h3 className="mt-1 text-base font-semibold text-[var(--text-primary)] line-clamp-2">
          {car.year} {car.title}
        </h3>

        {/* Location */}
        <div className="mt-2 flex items-center gap-1 text-sm text-[var(--text-secondary)]">
          <MapPin className="h-4 w-4" />
          <span>{car.location}</span>
        </div>

        {/* Specs Grid */}
        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[var(--border-light)] pt-4">
          <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <Calendar className="h-4 w-4 text-[var(--text-muted)]" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <Gauge className="h-4 w-4 text-[var(--text-muted)]" />
            <span>{formatMileage(car.mileage)} mi</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <Fuel className="h-4 w-4 text-[var(--text-muted)]" />
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <Cog className="h-4 w-4 text-[var(--text-muted)]" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <Car className="h-4 w-4 text-[var(--text-muted)]" />
            <span>{car.bodyType}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <DoorOpen className="h-4 w-4 text-[var(--text-muted)]" />
            <span>{car.doors} doors</span>
          </div>
        </div>
      </div>
    </article>
  );
}
