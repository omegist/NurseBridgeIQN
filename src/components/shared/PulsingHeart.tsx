
import { cn } from "@/lib/utils";

export function PulsingHeart({ className }: { className?: string }) {
  return (
    <div className={cn("pulsing-heart mx-auto", className)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <defs>
          <radialGradient id="heart-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: "rgb(255,105,180)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "rgb(220,20,60)", stopOpacity: 1 }} />
          </radialGradient>
        </defs>
        <path
          fill="url(#heart-gradient)"
          d="M173.3,43.3C158.1,28.1,135.5,25.9,118,36.5L100,46.9l-18-10.4C64.5,25.9,41.9,28.1,26.7,43.3c-15.2,15.2-17.4,37.8-6.8,55.3L100,180l79.9-81.4C190.7,81.1,188.5,58.5,173.3,43.3z"
        />
      </svg>
    </div>
  );
}
