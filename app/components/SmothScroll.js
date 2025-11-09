"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // ⬆️ zwiększ czas (więcej płynności)
      smoothWheel: true,
      smoothTouch: true,
      easing: (t) => 1 - Math.pow(2, -10 * t), // łagodna, naturalna krzywa
    });

    // obsługa scrolla
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
}
