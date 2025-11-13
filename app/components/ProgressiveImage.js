"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProgressiveImage({
  smallSrc, // string or imported static image
  largeSrc, // string or imported static image
  alt = "",
  className = "",
  sizes = "100vw",
  priority = false, // true for hero / above-the-fold
}) {
  const [largeLoaded, setLargeLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Mały, szybki (rozmyty) obraz — natychmiastowy placeholder */}
      <Image
        src={smallSrc}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority} // jeśli musimy szybko pokazać placeholder
        style={{
          objectFit: "cover",
        }}
        // jeśli smallSrc jest statycznym importem, Next wygeneruje optymalizację
      />

      {/* Duży obraz — lazy, naładuje się w tle i zrobi płynny fade-in */}
      <Image
        src={largeSrc}
        alt={alt}
        fill
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        style={{
          objectFit: "cover",
        }}
        onLoadingComplete={() => setLargeLoaded(true)}
      />
    </div>
  );
}
