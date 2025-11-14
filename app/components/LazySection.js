"use client";
import { useEffect, useRef, useState } from "react";

export default function LazySection({ children }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      // większy rootMargin pomoże aktywować wcześniej (lazy-load przed wejściem do viewport)
      { rootMargin: "0px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // renderuj placeholder o minimalnej wysokości, żeby element miał rozmiar do wykrycia
  return (
    <div ref={ref}>{show ? children : <div style={{ minHeight: 1 }} />}</div>
  );
}
//
