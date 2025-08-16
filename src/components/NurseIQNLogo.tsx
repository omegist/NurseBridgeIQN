"use client";

import React from "react";

type Size = "sm" | "md" | "lg" | "xl";

interface NurseIQNLogoProps {
  size?: Size;
  showWordmark?: boolean;
  withBackground?: boolean;
  className?: string;
  wordmarkClassName?: string;
}

const sizeMap: Record<Size, { svg: string; text: string; gap: string }> = {
  sm: { svg: "w-10 h-10", text: "text-xl", gap: "gap-2" },
  md: { svg: "w-16 h-16", text: "text-3xl", gap: "gap-3" },
  lg: { svg: "w-24 h-24", text: "text-5xl", gap: "gap-4" },
  xl: { svg: "w-32 h-32", text: "text-6xl", gap: "gap-5" },
};

export default function NurseIQNLogo({
  size = "md",
  showWordmark = true,
  withBackground = false,
  className = "",
  wordmarkClassName = "",
}: NurseIQNLogoProps) {
  const dims = sizeMap[size];

  return (
    <div
      className={[
        withBackground
          ? "min-h-[40vh] w-full flex items-center justify-center bg-[#002B3A]"
          : "",
        className,
      ].join(" ")}
      aria-label="NURSEIQN brand logo"
      role="img"
    >
      <div className={`flex flex-col items-center ${dims.gap}`}>
        {/* Abstract N mark */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className={dims.svg}
          aria-hidden="true"
        >
          {/* left orange stroke */}
          <path
            d="M22 18 L42 50 L22 82"
            stroke="#F59E0B"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
          {/* right green stroke */}
          <path
            d="M58 18 L58 82 L78 50"
            stroke="#10B981"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
          {/* red cross-bar */}
          <path
            d="M40 50 L60 50"
            stroke="#EF4444"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {showWordmark && (
          <div
            className={[
              "font-semibold tracking-[0.2em] uppercase",
              "bg-gradient-to-r from-[#B68B2A] via-[#D8BF79] to-[#F0E6B9] bg-clip-text text-transparent",
              dims.text,
              wordmarkClassName,
            ].join(" ")}
          >
            NURSEIQN
          </div>
        )}
      </div>
    </div>
  );
}
