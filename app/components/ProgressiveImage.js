"use client";

import Image from "next/image";
import { useState } from "react";

export function ProgressiveImage({ smallSrc, largeSrc, alt, className = "" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Mały obrazek — zawsze widoczny */}
      <Image
        src={smallSrc}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ filter: "blur(10px)" }} // opcjonalnie, efekt blur
        unoptimized
      />

      {/* Duży obrazek — fade-in po załadowaniu */}
      <Image
        src={largeSrc}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadingComplete={() => setLoaded(true)}
        unoptimized
      />
    </div>
  );
}
