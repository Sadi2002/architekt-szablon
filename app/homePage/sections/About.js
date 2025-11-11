"use client";

import Image from "next/image";

import { useState, useEffect } from "react";

export default function About() {
  // Track only whether the large image has loaded
  const [largeLoaded, setLargeLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const preloadLarge = () => {
      const img = new window.Image();
      img.src = "/about-large.jpg"; // pełne 4K
      img.onload = () => {
        if (!cancelled) {
          setLargeLoaded(true);
        }
      };
    };

    // Prefer idle when available
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(preloadLarge);
      return () => {
        // @ts-ignore - not available in all browsers
        if (typeof cancelIdleCallback === "function") {
          // @ts-ignore
          cancelIdleCallback(id);
        }
        cancelled = true;
      };
    }

    // Fallback: if page already loaded, run immediately; otherwise wait for load once
    if (document.readyState === "complete") {
      preloadLarge();
    } else {
      window.addEventListener("load", preloadLarge, { once: true });
    }

    return () => {
      window.removeEventListener("load", preloadLarge);
      cancelled = true;
    };
  }, []);

  return (
    <section className="pt-about-section-padding-top-mobile flex flex-col gap-about-section-gap-mobile xl:gap-about-section-gap-laptop xl:pt-about-section-padding-top-laptop 2xl:gap-about-section-gap-desktop mb-about-section-margin-bottom xl:mb-[150px]">
      <div className=" mx-margin-mobile lg:flex md:mx-tablet lg:mx-small-laptop lg:justify-between xl:justify-between 2xl:mx-desktop">
        <h2 className="text-about-title-size-mobile leading-about-title-line-height-mobile font-medium mb-about-title-margin-bottom max-w-about-title-max-width-mobile lg:text-about-title-size-laptop lg:leading-about-title-line-height-laptop lg:max-w-about-title-max-width-laptop lg:w-about-title-width-laptop 2xl:max-w-about-title-max-width-desktop  xl:font-normal">
          Witamy w Visual Studio Twoje eleganckie
        </h2>
        <div className="flex flex-col items-end lg:items-start lg:w-about-text-width-laptop">
          <div
            className="flex flex-col gap-about-text-box-gap font-light-font-weight mb-about-text-box-margin-bottom items-start text-about-text-box-size
          leading-[clamp(0.75rem,10vw, 1.5rem)] w-full-width"
          >
            <p className=" lg:max-w-about-text-max-width-small-laptop 2xl:max-w-full-width">
              Projektując przestrzeń, poszukuję harmonii między światłem a
              materią. Perfekcja detalu prowadzi do ponadczasowej formy, która
              inspiruje użytkowników.
            </p>
            <p className="  lg:max-w-about-text-max-width-small-laptop 2xl:max-w-full-width">
              Przestrzeń powinna oddychać światłem i funkcją. Projektując,
              poszukuję relacji między naturą a strukturą. Perspektywa
              użytkownika prowadzi każdy detal, czyniąc architekturę.
            </p>
          </div>
          <button className="font-semibold-font-weight text-[clamp(0.75rem,3.5vw,1rem)] relative uppercase after:content-[''] after:bg-main-black after:absolute after:bottom-[-0.5px] after:left-0 after:w-full-width after:h-[1px] ">
            Więcej o nas
          </button>
        </div>
      </div>
      <div className="relative max-w-about-image-max-width-mobile xl:w-about-image-width-laptop aspect-about-image-aspect-ratio">
        {/* Low-res placeholder */}
        <Image
          src="/about-small.jpg"
          alt="pokój"
          fill
          className="object-cover opacity-50"
          unoptimized
          priority={false}
        />

        {/* High-res image fades in when loaded */}
        <Image
          src="/about-large.jpg"
          alt="pokój"
          fill
          className={`object-cover transition-opacity duration-500 ${
            largeLoaded ? "opacity-100" : "opacity-0"
          }`}
          unoptimized
          priority={false}
        />
      </div>
    </section>
  );
}
